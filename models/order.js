const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
    default: ''
  },
  order_type: {
    type: String,
    default: '' // rank, classic
  },
  address: {
    type: String,
    default: ''
  },
  current_rank: {
    type: String,
    default: ''
  },
  target_win: { // for order type classic
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  target_rank: {
    type: String,
    default: ''
  },
  approved: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Boolean,
    default: false // false mean processing, true mean done
  }
}, {
  timestamps: true
})

const Customer = mongoose.model('Order', customerSchema)
module.exports = Customer