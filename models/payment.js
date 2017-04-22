let mongoose = require('mongoose');

// Payment Schema

let paymentSchema = mongoose.Schema({
    "entry_id": Number,
    "kind": String,
    "meta": {
      "period": Number,
      "year": Number
    },
    "invoice": {
      "type": String,
      "description": String,
      "latest_id": Number,
      "address": Number,
      "date": Number
    },
    "creditor": {
      "name": String,
      "address_id": Number,
      "percentage": Number,
      "payment": {
        "to_pay": Number,
        "payed": Number,
        "to_be_paid": Number,
        "date": String
      },
      "title": {
        "id": Number,
        "name": String
      }
    },
    "debtor": {
      "name": String,
      "address_id": Number,
      "street": String,
      "house_number": String,
      "postal": String,
      "city": String,
      "country": {
        "name": String,
        "code": String
      }
    },
    "payment": {
      "reference": String,
      "to_receive": Number,
      "received": Number,
      "to_be_received": Number,
      "tax_to_be_received": Number,
      "date": String,
      "description": Array,
      "date_received": Number
    }
});

let Payment = module.exports = mongoose.model('Payment', paymentSchema );

// Get Payments
module.exports.getPayments = function( callback, request, limit ) {
    Payment.find( request.query, callback )
}

module.exports.getPaymentById = function( id, callback ) {
    Payment.findById( id, callback );
}