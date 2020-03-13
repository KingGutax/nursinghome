var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM room", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('room/list', {
     title: 'Room List',
     data: ''
    })
   }else{
    res.render('room/list', {
     title: 'Room List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app