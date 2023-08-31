Ext.define('MovieApp.search.MovieItem', {
    alias: 'search.mrmovieitem',
    singleton: true,

    
    searchConfigs: [ 
        {
            title: 'Movie Item',
            api: {
                read: './MovieRental/api/Movie/search'
            },
            columns: [
                {dataIndex: 'intMovieId', text: 'Movie Id', dataType: 'numeric', key : true, hidden:false},
                {dataIndex: 'strMovieName', text: 'Movie Title', dataType: 'string', defaultSort : true, flex: 1},
                {dataIndex: 'strGenre', text: 'Genre', dataType: 'string', defaultSort : true , flex: 1},
                {dataIndex: 'strDirector', text: 'Director', dataType: 'string', defaultSort : true , flex: 1},
                {dataIndex: 'dblPrice', text: 'Price', dataType: 'float', defaultSort : true , flex: 1},

            ]
        }
    ]

});