/**
 * Created by arias on 31/03/2015.
 */

var express = require('express')
app = express(),
    path = require('path');
var cookieParser = require('cookie-parser');

var session = require('express-session');
var ConnectMongo = require('connect-mongo')(session);
var config = require('./config/config.js');
var mongoose = require('mongoose').connect(config.dbUrl);

var passport = require('passport');
var FacebookStragey = require('passport-facebook').Strategy;

var schemaUser =  mongoose.Schema({
     username:'String',
    password:'String',
    fullname : 'String'
    
});
var Person = mongoose.model('users', schemaUser);
var John = new Person({name:'John', password:'hidran', fullname:'John Arias'});
John.save(function(err){
    console.log(err)
});
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('hogan-express'));
app.set('view engine','html');
app.use(express.static(path.join(__dirname,'public')));

app.use(cookieParser());

console.log(config.dbUrl);

app.use(session({
    secret:config.sessionKey, 
    saveUnitialized: true,
    resave:true,
    store: new ConnectMongo({
        mongoose_connection:mongoose.connections[0],
        stringify: true
        }
    )
}));

var env = process.env.NODE_ENV || 'DEV';
console.log(env);
require('./routes/routes.js')(express, app);
require('./auth/passportAuth.js')(passport, FacebookStragey, config);
app.listen(8000, function(){
    console.log('lsistening')
});
