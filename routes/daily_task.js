var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM daily_task", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('daily_task/list', {
     title: 'Daily Task List',
     data: ''
    })
   }else{
    res.render('daily_task/list', {
     title: 'Daily Task List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app