var express = require('express');
var logger = require('morgan');             // 显示请求信息
var mongoose = require('mongoose');
var app = express()

 var dburl = "mongodb://localhost/zhongtuo"
 mongoose.connect(dburl)


app.set('views', './views/pages');
app.set('view engine', 'jade');

app.use(express.static('public'))

require('./routes/router')(app)
// app.get('/', function(req, res) {
//   res.render('index', {
//     title:  "这是首页"
//   })
// })

//tooltip
// if (app.get('env') === 'development') {
//   app.set('showStarckerr', true)              // 打印错误信息
//   app.use(logger(':method:url:status'))       // 请求的相关信息
//   app.locals.pretty = true                    // 不压缩源代码
//   mongoose.set('debug', true)                 // 数据库请求信息
// }

module.exports = app
