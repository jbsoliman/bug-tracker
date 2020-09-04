const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    priority: {
      type: String,
      required: true,
    },
    projectname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    assigneddeveloper: {
      type: String,
      required: true,
    },
    status: {
        type: String,
        required: true,
    }
  }, {
    timestamps: true,
  });
   
  const Ticket = mongoose.model('Ticket', ticketSchema);
  
  module.exports = Ticket;