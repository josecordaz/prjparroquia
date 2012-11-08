Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', 'lib/ext-4.1.1a/examples/ux');

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.form.*',
    'Ext.ux.CheckColumn'
]);

Ext.onReady(function(){
    // Define our data model
    Ext.define('Employee', {
        extend: 'Ext.data.Model',
        fields: [
            'name',
            'email',
            { name: 'start', type: 'date', dateFormat: 'n/j/Y' },
            { name: 'salary', type: 'float' },
            { name: 'active', type: 'bool' }
        ]
    });

    // Generate mock employee data
    var data = (function() {
        var lasts = ['Jones', 'Smith', 'Lee', 'Wilson', 'Black', 'Williams', 'Lewis', 'Johnson', 'Foot', 'Little', 'Vee', 'Train', 'Hot', 'Mutt'],
            firsts = ['Fred', 'Julie', 'Bill', 'Ted', 'Jack', 'John', 'Mark', 'Mike', 'Chris', 'Bob', 'Travis', 'Kelly', 'Sara'],
            lastLen = lasts.length,
            firstLen = firsts.length,
            usedNames = {},
            data = [],
            s = new Date(2007, 0, 1),
            eDate = Ext.Date,
            now = new Date(),
            getRandomInt = Ext.Number.randomInt,

            generateName = function() {
                var name = firsts[getRandomInt(0, firstLen - 1)] + ' ' + lasts[getRandomInt(0, lastLen - 1)];
                if (usedNames[name]) {
                    return generateName();
                }
                usedNames[name] = true;
                return name;
            };

        while (s.getTime() < now.getTime()) {
            var ecount = getRandomInt(0, 3);
            for (var i = 0; i < ecount; i++) {
                var name = generateName();
                data.push({
                    start : eDate.add(eDate.clearTime(s, true), eDate.DAY, getRandomInt(0, 27)),
                    name : name,
                    email: name.toLowerCase().replace(' ', '.') + '@sencha-test.com',
                    active: getRandomInt(0, 1),
                    salary: Math.floor(getRandomInt(35000, 85000) / 1000) * 1000
                });
            }
            s = eDate.add(s, eDate.MONTH, 1);
        }

        return data;
    })();

    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        // destroy the store if the grid is destroyed
        autoDestroy: true,
        model: 'Employee',
        proxy: {
            type: 'memory'
        },
        data: data,
        sorters: [{
            property: 'start',
            direction: 'ASC'
        }]
    });

    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false
    });

    // create the grid and specify what field you want
    // to use for the editor at each column.
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: [
            {
                text:'Hombre',
                columns:[
                    {
                        header: 'Apellido Paterno',
                        dataIndex: 'name',
                        width: 90,
                        editor: {
                            // defaults to textfield if no xtype is supplied
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Apellido Materno',
                        dataIndex: 'email',
                        width: 90,
                        editor: {
                            allowBlank: false,
                            vtype: 'email'
                        }
                    },
                    {
                        xtype: 'datecolumn',
                        header: 'Nombre',
                        dataIndex: 'start',
                        width: 90,
                        editor: {
                            xtype: 'datefield',
                            allowBlank: false,
                            format: 'm/d/Y',
                            minValue: '01/01/2006',
                            minText: 'Cannot have a start date before the company existed!',
                            maxValue: Ext.Date.format(new Date(), 'm/d/Y')
                        }
                    }
                ]
            }
            ,
            {
                text:'Mujer',
                columns:[
                    {
                        xtype: 'numbercolumn',
                        header: 'Apellido Paterno',
                        dataIndex: 'salary',
                        format: 'EUR 0',
                        width: 90,
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: false,
                            minValue: 1,
                            maxValue: 150000
                        }
                    }, {
                        xtype: 'checkcolumn',
                        header: 'Apellido Materno',
                        dataIndex: 'active',
                        width: 90,
                        editor: {
                            xtype: 'checkbox',
                            cls: 'x-grid-checkheader-editor'
                        }
                    }, {
                        xtype: 'checkcolumn',
                        header: 'Nombre',
                        dataIndex: 'active',
                        width: 90,
                        editor: {
                            xtype: 'checkbox',
                            cls: 'x-grid-checkheader-editor'
                        }
                    }
                ]
            },
            {
                xtype: 'numbercolumn',
                header: 'Unk_0',
                dataIndex: 'salary',
                format: 'EUR 0',
                width: 50,
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 1,
                    maxValue: 150000
                }
            }, {
                xtype: 'checkcolumn',
                header: 'Unk_1',
                dataIndex: 'active',
                width: 50,
                editor: {
                    xtype: 'checkbox',
                    cls: 'x-grid-checkheader-editor'
                }
            }, {
                xtype: 'checkcolumn',
                header: 'Unk_2',
                dataIndex: 'active',
                width: 50,
                editor: {
                    xtype: 'checkbox',
                    cls: 'x-grid-checkheader-editor'
                }
            }
        ],
        renderTo: 'editor-grid',
        width: 1000,
        height: 400,
        title: 'Matrimonios',
        frame: true,
        tbar: [
            {
                text: 'Agregar',
                iconCls: 'agregar-matrimonio',
                handler : function() {
                    rowEditing.cancelEdit();

                    // Create a model instance
                    var r = Ext.create('Employee', {
                        name: 'New Guy',
                        email: 'new@sencha-test.com',
                        start: Ext.Date.clearTime(new Date()),
                        salary: 50000,
                        active: true
                    });

                    store.insert(0, r);
                    rowEditing.startEdit(0, 0);
                }
            },
            {
                itemId: 'removeEmployee',
                text: 'Eliminar',
                iconCls: 'eliminar-matrimonio',
                handler: function() {
                    var sm = grid.getSelectionModel();
                    rowEditing.cancelEdit();
                    store.remove(sm.getSelection());
                    if (store.getCount() > 0) {
                        sm.select(0);
                    }
                },
                disabled: true
            },
            {
                itemId: 'importarPdf',
                text: 'Importar a PDF',
                iconCls: 'crear-pdf',
                handler: function() {
//                    var sm = grid.getSelectionModel();
//                    rowEditing.cancelEdit();
//                    store.remove(sm.getSelection());
//                    if (store.getCount() > 0) {
//                        sm.select(0);
//                    }
                }
            }
        ],
        plugins: [rowEditing],
        listeners: {
            'selectionchange': function(view, records) {
                grid.down('#removeEmployee').setDisabled(!records.length);
            }
        }
    });
});