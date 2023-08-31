Ext.define('MovieApp.model.RentalItem', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intRentalId',

    fields: [
        { name: 'intRentalId', type: 'int'},
        { name: 'intTransactionId',
            type: 'int',
            reference: {
                type: 'MovieApp.model.TransactionItem',
                inverse: {
                    role: 'tblMRRental',
                    storeConfig: {
                        complete: true,
                        proxy: {
                            type: 'rest',
                            api: {
                                read: './MovieRental/api/Rental/get'
                            },
                            reader: {
                                type: 'json',
                                rootProperty: 'data',
                                messageProperty: 'message'
                            }
                        }
                    }
                }
            }
        },
        
        { name: 'intMovieId', type: 'int'},        
        { name: 'dtmReturnDate', type: 'date' , dateFormat: 'c', dateWriteFormat: 'C'},
        { name: 'strStatus', type: 'string', defaultValue:'Pending'},
        { name: 'intConcurrencyId', type: 'int' },
    ]
});

//detail