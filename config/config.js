/**
 * Created by arias on 01/04/2015.
 */
var confEnv = './'+(process.env.NODE_ENV || 'development')+'.json';
console.log(process.env.NODE_ENV);
console.log(confEnv);
module.exports = require(confEnv);
