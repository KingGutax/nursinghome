var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM suffers", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('suffers/list', {
     title: 'Suffers List',
     data: ''
    })
   }else{
    res.render('suffers/list', {
     title: 'Suffers List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app