var express = require('express')
var app = express()
var HTTP = require('http')
var HTTPS = require('https')
var fs = require('fs')


app.use(express.static('./'))
app.use(express.static('./public'))

try {
    var httpsConfig = {
        key: fs.readFileSync('/etc/letsencrypt/live/btfranzen.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/btfranzen.com/cert.pem'),
    }

    var httpsServer = HTTPS.createServer(httpsConfig, app)
    // 443 is the default port for HTTPS traffic
    httpsServer.listen(443)
    var httpApp = express()
    httpApp.use(function(req, res, next){
        res.redirect('https://btfranzen.com' + req.url)
    })
    httpApp.listen(80)
}
catch(e){
    console.log(e)
    console.log('could not start HTTPS server')
    var httpServer = HTTP.createServer(app)
    httpServer.listen(80)
}

/* old */
// app.listen(80, function() {
//   console.log('running on 8080')
// })
