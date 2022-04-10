const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
  name: {
    lowercase: true,
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  fax: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  }
})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer