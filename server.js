var express = require('express')
var app = express()

app.use(express.static('./'))
app.use(express.static('./public'))


app.listen(80, function() {
  console.log('running on 8080')
})
