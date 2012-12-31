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
    'Ext.grid.PagingScroller',
    'Ext.ux.form.SearchField'
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

    // create the Data Store
    var store2 = Ext.create('Ext.data.Store', {
        model:'app.model.matrimonios.MatrimoniosModel',
        autoLoad:true,
        sorters: { property: 'id', direction : 'asc' },
//        autoSync:true,
        remoteGroup: true,
        buffered: true,
        leadingBufferZone: 400,
        pageSize: 100,
        proxy: {
            timeout : 12000,
            type: 'rest',
            batchActions:true,
            appendId:false,
            root: 'data',
            url : '/'+getAplication()+'/ManageMatrimoniosStore.x',
            reader  : {
                type        : 'json',
                root        : 'data',
                totalProperty: 'totalCount'
            },
            writer:{
                type:'json'
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
            },
            remoteFilter: true,
             // sends single sort as multi parameter
            simpleSortMode: true,
            // sends single group as multi parameter
            simpleGroupMode: true,

            // This particular service cannot sort on more than one field, so grouping === sorting.
            groupParam: 'sort',
            groupDirectionParam: 'dir',
            // Parameter name to send filtering information in
            filterParam: 'query',

            // The PHP script just use query=<whatever>
            encodeFilters: function(filters) {
                return filters[0].value;
            }
        },
        listeners:{
            write:function( store, operation, eOpts ){
                store2.sort('id','ASC');                
            },
            // This particular service cannot sort on more than one field, so if grouped, disable sorting
            groupchange: function(store, groupers) {
                var sortable = !store.isGrouped(),
                    headers = grid.headerCt.getVisibleGridColumns(),
                    i, len = headers.length;
                
                for (i = 0; i < len; i++) {
                    headers[i].sortable = (headers[i].sortable !== undefined) ? headers[i].sortable : sortable;
                }
            },

            // This particular service cannot sort on more than one field, so if grouped, disable sorting
            beforeprefetch: function(store, operation) {
                if (operation.groupers && operation.groupers.length) {
                    delete operation.sorters;
                }
            },
                totalcountchange: onStoreSizeChange
        }
    });

    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false
    });

    function onStoreSizeChange() {
        grid.down('#status').update({count: store2.getTotalCount()-1});
    }
    // create the grid and specify what field you want
    // to use for the editor at each column.

    var grid = Ext.create('Ext.grid.Panel', {
        columnLines : true,
        rowLines :true,
        store: store2,
        loadMask: true,
        multiSelect: true,
        title: 'Matrimonios',
        frame: true,
        selModel: {
            pruneRemoved: false
        },
        viewConfig: {
            trackOver: false
        },
        features:[{
            ftype: 'grouping',
            hideGroupedHeader: false
        }],
        verticalScroller:{
            variableRowHeight: true
        },
        columns: [
            {
                header: 'id',
                dataIndex: 'id',
                width: 50,
                sortable:true
            },
            {
                text:'Hombre',
                columns:[
                    {
                        header: 'Apellido Paterno',
                        dataIndex: 'apellidoPaternoH',
                        width: 90,
                        sortable:true,
                        editor: {
                            // defaults to textfield if no xtype is supplied
                            allowBlank: false
                        }
                    },
                    {
                        header: 'Apellido Materno',
                        dataIndex: 'apellidoMaternoH',
                        width: 90,
                        sortable:true,
                        editor: {
                            allowBlank: false
                            //vtype: 'email'
                        }
                    },
                    {
                        header: 'Nombre',
                        dataIndex: 'nombreH',
                        width: 200,
                        sortable:true,
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
                        sortable:true,
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
                        sortable:true,
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
                        width: 200,
                        sortable:true,
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
                sortable:true,
                width: 50,
                editor: {
                    allowBlank: false
//                    xtype: 'numberfield',
//                    allowBlank: false,
//                    minValue: 1,
//                    maxValue: 150000
                }
            }, {
                header: 'Unk_1',
                dataIndex: 'unknow_1',
                width: 50,
                sortable:true,
                editor: {
                    allowBlank: false
                }
            }, {
                header: 'Unk_2',
                dataIndex: 'unknow_2',
                width: 50,
                sortable:true,
                editor: {
                    allowBlank: false
                }
            }
        ]
        ,
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
            }
            ,
            {
                itemId: 'saveEmployee',
                text: 'Guardar',
                iconCls: 'guardar-matrimonio',
                handler: function() {
                    store2.sync();
                    store2.sort('id','ASC');
                }
            },
            ,
            {
                itemId: 'removeEmployee',
                text: 'Eliminar',
                iconCls: 'eliminar-matrimonio',
                handler: function() {
                    var sm = grid.getSelectionModel();
                    rowEditing.cancelEdit();
                    store2.remove(sm.getSelection());
                    if (store2.getCount() > 0) {
                        sm.select(0);
                    }
                }
            },
            {
                itemId: 'importarPdf',
                text: 'Importar a PDF',
                iconCls: 'crear-pdf',
                handler: function() {
                    window.open('/prjparroquia/generaPDF.pdf');
                }
            },'->',
            {
                iconCls:'busqueda',
                width: 400,
                fieldLabel: 'Search',
                labelWidth: 50,
                xtype: 'searchfield',
                store: store2
            },{
                xtype: 'component',
                id: 'status',
                tpl: 'Registros: {count}',
                style: 'margin-right:5px; margin-left:5px'
            }
        ]
        ,
        plugins: [rowEditing],
        listeners: {
            'selectionchange': function(view, records) {
                grid.down('#removeEmployee').setDisabled(!records.length);
            }
        }
    });
     var win2 = Ext.create('widget.window', {
        width: 1010,
        height: 600,
        x: 50,
        renderTo: Ext.getBody(),
        y: 50,
        title: 'Matrimonios',
        closable: false,
        plain: true,
        layout: 'fit',
        items: [grid]
    });
    win2.show();
});

getAplication = function(){
    return parent.window.location.pathname.split('/')[1];      
}