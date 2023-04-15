import mongoose from 'mongoose'
import data from '../data/data.js'

const result = data.map(item => {
    return {
        'id': String, 
        'value': String, 
        'firstName': String, 
        'lastName': String,
        'company': String, 
        'email': String,
        'admin': String
    }
})

const Customers = new mongoose.Schema({          
    Customers: result
})

export default mongoose.model('Customers', Customers)
