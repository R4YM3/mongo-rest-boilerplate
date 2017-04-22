let mongoose = require('mongoose');
// Contract Schema

// {
//   "title": {
//     "author": "Mak. Geert",
//     "name": "De brug",
//     "id": 237372
//   },
//   "customer": {
//     "name": "Siedler Verlag",
//     "slug": "siedler-verlag",
//     "contact_person": "Thomas Rathnow",
//     "country": {
//       "name": "DUITSLAND",
//       "code": "de"
//     }
//   },
//   "contract": {
//     "id": 590,
//     "type": "Hoofdcontract",
//     "status": "Geaccepteerd",
//     "translated": true,
//     "film": false,
//     "theater": false,
//     "duration": null,
//     "duration_calculated": 8,
//     "start_date": "2007-06-20 00:00:00.000",
//     "end_date": "2015-06-20 00:00:00.000",
//     "publish_date": null,
//     "percentage": 70,
//     "title_name": null
//   }
// }

let contractSchema = mongoose.Schema({
    title: {
        author: {
            type: String,
        },
        name: {
            type: String,
        },
        id: {
            type: Number,
            required: true
        }
    },
    customer: {
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String
        },
        contact_person: {
            type: String
        },
        country: {
            name: {
                type: String,
                required: true
            },
            code: {
                type: String,
                required: true
            }
        }
    },
    contract: {
        id: {
            type: Number
        },
        type: {
            type: String,
        },
        status: {
            type: String,
        },
        translated: {
            type: Boolean,
        },
        film: {
            type: Boolean,
        },
        theater: {
            type: Boolean,
        },
        duration: {
            type: Number,
        },
        duration_calculated: {
            type: Number,
        },
        start_date: {
            type: String,
        },
        end_date: {
            type: String,
        },
        publish_date: {
            type: String,
        },
        percentage: {
            type: Number,
        },
        title_name: {
            type: String,
        }
    }
});

let Contract = module.exports = mongoose.model('Contract', contractSchema );

// Get Contracts
module.exports.getContracts = function( callback, request, limit ) {
    Contract.find( request.query, callback )
}

module.exports.getContractById = function( id, callback ) {
    Contract.findById( id, callback );
}