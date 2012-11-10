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
    Ext.define('app.model.matrimonios.MatrimoniosModel', {
        extend: 'Ext.data.Model',
        fields: [
                {name:'id',type:'int'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                {name:'apellidoPaternoH',type:'string'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                {name:'apellidoMaternoH',type:'string'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                {name:'nombreH',type:'string'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                {name:'apellidoPaternoM',type:'string'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                {name:'apellidoMaternoM',type:'string'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                {name:'nombreM',type:'string'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                {name:'unknow_0',type:'string'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                {name:'unknow_1',type:'string'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                {name:'unknow_2',type:'string'}
        ]
    });
    
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
    var store2 = Ext.create('Ext.data.Store', {
        model:'app.model.matrimonios.MatrimoniosModel',
        autoLoad:true,
        proxy: {
            type: 'ajax',
            root: 'data',
            api:{
                create  : '/'+getAplication()+'/InsertaMatrimoniosStore.x',
                read    : '/'+getAplication()+'/ConsultaMatrimoniosStore.x',
                update  : '../../../ActualizaMatrimoniosStore.x',
                destroy : '../../../EliminaMatrimoniosStore.x'
            },
            reader  : {
                type        : 'json',
                root        : 'data'
            },
            listeners: {
                exception: function(proxy, response, operation){
                    var msg='';
                    var respuesta=Ext.decode(response.responseText);
                    if(respuesta){
                        msg = respuesta.message;
                    }else{
                        msg =response.statusText;
                    }
                    Ext.MessageBox.show({
                        title:'titulo mensaje',
                        msg: msg,
                        icon: Ext.MessageBox.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }   
            }
        }
    });
    
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
        store: store2,
        columns: [
            {
                header: 'id',
                dataIndex: 'id',
                width: 50
            },
            {
                text:'Hombre',
                columns:[
                    {
                        header: 'Apellido Paterno',
                        dataIndex: 'apellidoPaternoH',
                        width: 90,
                        editor: {
                            // defaults to textfield if no xtype is supplied
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Apellido Materno',
                        dataIndex: 'apellidoMaternoH',
                        width: 90,
                        editor: {
                            allowBlank: false
                            //vtype: 'email'
                        }
                    },
                    {
                        header: 'Nombre',
                        dataIndex: 'nombreH',
                        width: 90,
                        editor: {
//                            xtype: 'datefield',
                            allowBlank: false
//                            format: 'm/d/Y',
//                            minValue: '01/01/2006',
//                            minText: 'Cannot have a start date before the company existed!',
//                            maxValue: Ext.Date.format(new Date(), 'm/d/Y')
                        }
                    }
                ]
            }
            ,
            {
                text:'Mujer',
                columns:[
                    {
//                        xtype: 'numbercolumn',
                        header: 'Apellido Paterno',
                        dataIndex: 'apellidoPaternoM',
                        format: 'EUR 0',
                        width: 90,
                        editor: {
//                            xtype: 'numberfield',
                            allowBlank: false
//                            minValue: 1,
//                            maxValue: 150000
                        }
                    }, {
//                        xtype: 'checkcolumn',
                        header: 'Apellido Materno',
                        dataIndex: 'apellidoMaternoM',
                        width: 90,
                        editor: {
                            allowBlank: false
//                            xtype: 'checkbox',
//                            cls: 'x-grid-checkheader-editor'
                        }
                    }, {
//                        xtype: 'checkcolumn',
                        header: 'Nombre',
                        dataIndex: 'nombreM',
                        width: 90,
                        editor: {
                            allowBlank: false
//                            xtype: 'checkbox',
//                            cls: 'x-grid-checkheader-editor'
                        }
                    }
                ]
            },
            {
//                xtype: 'numbercolumn',
                header: 'Unk_0',
                dataIndex: 'unknow_0',
//                format: 'EUR 0',
                width: 50,
                editor: {
                    allowBlank: false
//                    xtype: 'numberfield',
//                    allowBlank: false,
//                    minValue: 1,
//                    maxValue: 150000
                }
            }, {
//                xtype: 'checkcolumn',
                header: 'Unk_1',
                dataIndex: 'unknow_1',
                width: 50,
                editor: {
                    allowBlank: false
//                    xtype: 'checkbox',
//                    cls: 'x-grid-checkheader-editor'
                }
            }, {
//                xtype: 'checkcolumn',
                header: 'Unk_2',
                dataIndex: 'unknow_2',
                width: 50,
                editor: {
                    allowBlank: false
//                    xtype: 'checkbox',
//                    cls: 'x-grid-checkheader-editor'
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
                    var r = Ext.create('app.model.matrimonios.MatrimoniosModel', {
                        id: '',
                        apellidoPaternoH: '',
                        apellidoMaternoH: '',
                        nombreH:'',
                        apellidoPaternoM: '',
                        apellidoMaternoM: '',
                        nombreM:'',
                        unknow_0:'',
                        unknow_1:'',
                        unknow_2:''
                    });

                    store2.insert(0, r);
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

getAplication = function(){
    return parent.window.location.pathname.split('/')[1];      
}