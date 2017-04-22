const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = require('url');

// console.log(url)

const Title = require('./models/title')
const Contract = require('./models/contract')
const Payment = require('./models/payment')

// connect to mongoose
mongoose.connect('mongodb://localhost/vbku');
let db = mongoose.connection;

// router
app.get('/', function ( request, response ) {
    response.send('please use /api/titles, /api/authors, /api/contracts, /api/payments');
})

app.get('/api/titles', function( request, response ) {
    Title.getTitles(function( error, titles ){
        if ( error ) {
            throw error
        }
        response.json( titles );
    });
});


app.get('/api/contracts', function( request, response ) {
    Contract.getContracts( function( error, contracts ){
        if ( error ) {
            throw error
        }

        response.json( contracts );
    }, request);
});

app.get('/api/contracts/:_id', function( request, response ) {

    Contract.getContractById( request.params._id, function( error, contract ){
        if ( error ) {
            throw error
        }
        response.json( contract );
    });
});


app.get('/api/payments', function( request, response ) {
    Payment.getPayments( function( error, payments ){
        if ( error ) {
            throw error
        }

        response.json( payments );
    }, request);
});

app.get('/api/payments/:_id', function( request, response ) {

    Payment.getPaymentById( request.params._id, function( error, payment ){
        if ( error ) {
            throw error
        }
        response.json( payment );
    });
});

app.listen( 3000 );
console.log('Running on port 3000')