var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM therapy", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('therapy/list', {
     title: 'Therapy List',
     data: ''
    })
   }else{
    res.render('therapy/list', {
     title: 'Therapy List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app