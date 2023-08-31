Ext.define('MovieApp.search.TransactionItem', {
    alias: 'search.mrtransactionitem',
    singleton: true,

    
    searchConfigs: [ 
        {
            title: 'Transaction Item',
            api: {
                read: './MovieRental/api/Transaction/SearchDetail'
            },
            
            columns: [
                {dataIndex: 'intTransactionId', text: 'Transaction Id', dataType: 'numeric', key : true, hidden:true},
                {dataIndex: 'intUserId', text: 'Customer ID', dataType: 'int', defaultSort : true,  hidden:true, flex: 1},
                {dataIndex: 'strName', text: 'Customer Name', dataType: 'string', defaultSort : true, flex: 1},
                {dataIndex: 'dtmRentDate', text: 'Rent Date', dataType: 'date', defaultSort : true , flex: 1},
                {dataIndex: 'strStatus', text: 'Transaction Status', dataType: 'string', defaultSort : true , flex: 1},
            ]
    }
]
 
});