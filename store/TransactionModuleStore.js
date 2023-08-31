Ext.define('MovieApp.store.TransactionModuleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.mrtransactionmodulestore',

    requires: [
        'MovieApp.model.TransactionModule' // this
    ],
    model: 'MovieApp.model.TransactionModule',// this
    storeId: 'TransactionModule',
    pageSize: 50,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './MovieRental/api/Transaction/get',
            update: './MovieRental/api/Transaction/put',
            create: './MovieRental/api/Transaction/post',
            destroy: './MovieRental/api/Transaction/delete'
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