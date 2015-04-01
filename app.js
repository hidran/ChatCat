/**
 * Created by arias on 31/03/2015.
 */

var express = require('express')
app = express(),
    path = require('path');
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('hogan-express'));
app.set('view engine','html');
app.route('/').get( function(req, resp, next){
    resp.send('<h1>Hello world');
    next();
});
app.listen(8000, function(){
    console.log('lsistening')
});
