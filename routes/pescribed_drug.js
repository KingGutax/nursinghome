var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM pescribed_drug", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('pescribed_drug/list', {
     title: 'Presribed Drug List',
     data: ''
    })
   }else{
    res.render('prescribed_drug/list', {
     title: 'Prescribed Drug List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app