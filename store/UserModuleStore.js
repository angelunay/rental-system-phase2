Ext.define('MovieApp.store.UserModuleStore', {
    extend: 'Ext.data.Store',
    alias: 'mrusermodulestore',

    requires: [
        'MovieApp.model.UserModule' // this
    ],
    model: 'MovieApp.model.UserModule',// this
    storeId: 'UserModule',
    pageSize: 50,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './MovieRental/api/User/get',
            update: './MovieRental/api/User/put',
            create: './MovieRental/api/User/post',
            destroy: './MovieRental/api/User/delete'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            allowSingle: false
        }
    }
});