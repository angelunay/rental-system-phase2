Ext.define('MovieApp.model.MovieModule', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],
    idProperty: 'intMovieId',

    fields: [
        { name: 'intMovieId', type: 'int' },
        { name: 'strMovieName', type: 'string' },
        { name: 'strGenre', type: 'string' },
        { name: 'strDirector', type: 'string' },
        { name: 'dblPrice', type: 'float' },       
        { name: 'intConcurrencyId', type: 'int' },
    ]


});