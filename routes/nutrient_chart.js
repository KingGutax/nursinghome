var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM nutrient_chart", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('nutrient_chart/list', {
     title: 'Nutrient Chart List',
     data: ''
    })
   }else{
    res.render('nutrient_chart/list', {
     title: 'Nutrient Chart List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app