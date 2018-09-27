const express = require('express');
const router = express.Router();
const Ticket = require('../models/dash')
const mongoose = require('mongoose')

router.post('/tickets', (req, res, next) => {
  let newTicket = new Ticket({
    title: req.body.ticketTitle,
    description: req.body.ticketDescription,
    status: req.body.ticketStatus,
    department: req.body.ticketDepartment,
    //notes: req.bodt.ticketNotes
  });

  Ticket.addTicket(newTicket, (err, ticket) => {
    if(err){
      res.json({msg:'Failed to add ticket'});
    } else {
      res.json({msg:'Ticket created'});
    }
  });
});

router.get('/tickets', (req, res, next) => {
  Ticket.find({}, (err, tickets) => {

      res.send(JSON.stringify(tickets))
  })
});

router.get('/tickets/:id', (req, res, next) => {
  var id = new mongoose.Types.ObjectId(req.params.id)
  //console.log(req.params.id)
  Ticket.findOne({_id: id}, (err, tickets) => {
    res.send(JSON.stringify(tickets))
  })
  //res.send('a single ticket')
})

router.delete('/tickets/:id', (req, res, next) => {
  var id = new mongoose.Types.ObjectId(req.params.id)
  //console.log(req.params.id)
  Ticket.remove({_id: id}, (err, tickets) => {
    console.log(tickets)
    res.send(JSON.stringify(tickets))
  })
  //res.send('a single ticket')
})

router.put('/tickets/:id', (req, res, next) => {
  var id = new mongoose.Types.ObjectId(req.params.id)
  console.log('body',req.body)
  console.log('title=====>',req.body.ticketTitle)
  console.log('id=====>',id)

  Ticket.findOneAndUpdate({_id: id}, {title: req.body.ticketTitle, description: req.body.ticketDescription, status: req.body.ticketStatus, department: req.body.ticketDepartment}, function(err, ticket) {

      console.log('updated ticket', ticket)
      res.send(JSON.stringify(ticket))

 })
})


module.exports = router;
