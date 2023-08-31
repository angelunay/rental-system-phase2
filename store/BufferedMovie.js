Ext.define('MovieApp.store.BufferedMovie', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.mrbufferedmovie',

    requires: [
        'MovieApp.model.MovieModule'
    ],
    model: 'MovieApp.model.MovieModule',
    storeId: 'BufferedMovie',
    pageSize: 100,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './MovieRental/api/Movie/search'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        }
    }
});