Ext.define('MovieApp.search.UserItem', {
    alias: 'search.mruseritem',
    singleton: true,

    searchConfigs: [ 
        {
            title: 'User Item',
            api: {
                read: './MovieRental/api/User/search'
            },
            columns: [
                {dataIndex: 'intUserId', text: 'User Id', dataType: 'numeric', key : true, hidden:false},
                {dataIndex: 'strName', text: 'Customer Name', dataType: 'string', defaultSort : true, flex: 1},
                {dataIndex: 'strGender', text: 'Gender', dataType: 'string', defaultSort : true , flex: 1},
                {dataIndex: 'dtmBirthdate', text: 'Birthdate', dataType: 'date', defaultSort : true , flex: 1},
                {dataIndex: 'strAddress', text: 'Address', dataType: 'string', defaultSort : true , flex: 1},
                {dataIndex: 'strEmail', text: 'Email Address', dataType: 'string', defaultSort : true , flex: 1},
                {dataIndex: 'strPhone', text: 'Phone No.', dataType: 'string', defaultSort : true , flex: 1},

            ]
        }
    ]

});