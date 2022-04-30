var http = require('http')
var express = require('express')
var bodyPars = require('body-parser')

var version = { "version": "1.2.3" }
var gameLink = {"link" : "https://www.mediafire.com/file/79gs00llemj3tos/WarOfSea.zip/file"}

var app = express();

app.use(bodyPars.urlencoded({extended: true}))
app.use(bodyPars.json())

app.get('/api/version', (req, res) => {
    res.status(200).jsonp(version)
})

app.get('/api/gameLink', (req, res) => {
    res.status(200).jsonp(gameLink)
})

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`${process.env.PORT}`)
}) 