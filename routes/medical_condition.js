var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM medical_condition", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('medical_condition/list', {
     title: 'Medical Condition List',
     data: ''
    })
   }else{
    res.render('medical_condition/list', {
     title: 'Medical Condition List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app