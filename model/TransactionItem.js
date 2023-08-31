Ext.define('MovieApp.model.TransactionItem', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field',
        'MovieApp.model.RentalItem'
    ],

    idProperty: 'intTransactionId',

    fields: [
        
        { name: 'intTransactionId', type: 'int' },
        { name: 'intUserId', type: 'int' },  
        { name: 'strStatus', type: 'string', defaultValue:'Pending' }, 
        { name: 'dtmRentDate', type: 'date' , dateFormat: 'c', dateWriteFormat: 'C'},
        { name: 'intConcurrencyId', type: 'int' }
    ],


    // Set the default value for dtmRentDate
    constructor: function(config) {
        this.callParent(arguments);
        this.set('dtmRentDate', new Date()); // Set to the current date
    }

    
});

//header or parent