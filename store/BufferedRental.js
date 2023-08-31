Ext.define('MovieApp.store.BufferedRental', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.mrbufferedrental',

    requires: [
        'MovieApp.model.UserModule'
    ],
    model: 'MovieApp.model.UserModule',
    storeId: 'BufferedRental',
    pageSize: 100,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './MovieRental/api/User/search'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        }
    }
});