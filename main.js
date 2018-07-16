const express = require('express');
const app = express();
const path = require('path');


/**
 * home page
 */

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
})

/**
 * place order route
 */
app.get('/neworder', function(req, res){
    res.sendFile(path.join(__dirname, 'files','/placeorder.html'));
})

/**
 * Prediction
 */
app.get('/prediction', function(req, res){
    res.sendFile(path.join(__dirname, 'files','/prediction.html'));
})

/**
 * Kitchen Display
 */
app.get('/kitchendisplay', function(req, res){
    res.sendFile(path.join(__dirname, 'files','/kitchen.html'));
})

/**
 * Download Report
 */
app.get('/report', function(req, res){
    res.sendFile(path.join(__dirname, 'files','/report.html'));
})

app.listen(3000);