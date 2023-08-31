Ext.define('MovieApp.model.TransactionModule', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],
    idProperty: 'intUserId',

    fields: [
        { name: 'intTransactionId', type: 'int' },
        { name: 'intUserId', type: 'int' },
        { name: 'dtmRentDate', type: 'date', dateFormat: 'c', dateWriteFormat: 'C'},        
        { name: 'intConcurrencyId', type: 'int' },
    ]


});