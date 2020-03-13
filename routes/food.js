var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM food", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('food/list', {
     title: 'Food List',
     data: ''
    })
   }else{
    res.render('food/list', {
     title: 'Food List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app