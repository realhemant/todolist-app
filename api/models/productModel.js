'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  price: {
    type: Number,
    required: 'Kindly enter the name of the task'
  },
  author: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  imgUrl: {
    type: String,
    // required: 'Kindly enter the name of the task'
  },
  rating: {
    type: Number,
    // required: 'Kindly enter the name of the task'
  },
  offerTag:{
    type:Boolean,
  },
  description: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  // status: {
  //   type: [{
  //     type: String,
  //     enum: ['pending', 'ongoing', 'completed']
  //   }],
    // default: ['pending']
  // }
});

module.exports = mongoose.model('Product', ProductSchema);