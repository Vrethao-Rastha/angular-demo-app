const mongoose = require('mongoose');
const config = require('../config/database');

const TicketSchema = mongoose.Schema({
  title :{
    type: String
  },
  description: {
    type: String
  },
  dateCreated:{
    type: Date, default: Date.now
  },
  lastModified:{
    type: Date, default: Date.now
  },
  department: {
    type:String
  },
  status:{
    type:String
  }

});

const Ticket = module.exports = mongoose.model('Ticket', TicketSchema);

module.exports.getTicketById = function(id, callback){
  Ticket.findById(id, callback);
}
module.exports.getOneTicketById = function(id, callback){
  const querry = {id: id}
  Ticket.findOne(querry, callback);
}

module.exports.addTicket = function(newTicket, callback){
  //if(err) throw err;
  newTicket.save(callback);
}
