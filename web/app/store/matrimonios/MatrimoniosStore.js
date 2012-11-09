Ext.define('app.store.matrimonios.MatrimoniosStore',{
    extend:'Ext.data.Store',
    model:'app.model.matrimonios.MatrimoniosModel',
    proxy: {
        type: 'ajax',
        root: 'data',
        api:{
            create  : '../../../InsertaMatrimoniosStore.x',
            read    : '../../../ConsultaMatrimoniosStore.x',
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