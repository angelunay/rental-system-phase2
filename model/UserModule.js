Ext.define('MovieApp.model.UserModule', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],
    idProperty: 'intUserId',

    fields: [
        { name: 'intUserId', type: 'int' },
        { name: 'strName', type: 'string' },
        { name: 'strGender', type: 'string' },
        { name: 'dtmBirthdate', type: 'date', dateFormat: 'c', dateWriteFormat: 'C'},
        { name: 'strAddress', type: 'string' },
        { name: 'strEmail', type: 'string' },
        { name: 'strPhone', type: 'string' },
        { name: 'intConcurrencyId', type: 'int' },
    ]


});