var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM emergency_contact", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('emergency_contact/list', {
     title: 'Emergency Contact List',
     data: ''
    })
   }else{
    res.render('emergency_contact/list', {
     title: 'Emergency Contact List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app