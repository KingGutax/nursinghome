var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM vital", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('vital/list', {
     title: 'Vital List',
     data: ''
    })
   }else{
    res.render('vital/list', {
     title: 'vital List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app