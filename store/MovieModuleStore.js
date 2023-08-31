Ext.define('MovieApp.store.MovieModuleStore', {
    extend: 'Ext.data.Store',
    alias: 'mrmoviemodulestore',

    requires: [
        'MovieApp.model.MovieModule'
    ],
    model: 'MovieApp.model.MovieModule',
    storeId: 'MovieModule',
    pageSize: 50,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './MovieRental/api/Movie/get',
            update: './MovieRental/api/Movie/put',
            create: './MovieRental/api/Movie/post',
            destroy: './MovieRental/api/Movie/delete'
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