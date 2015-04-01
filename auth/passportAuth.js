/**
 * Created by arias on 01/04/2015.
 */
module.exports = function (passport, FacebookStragey, config, mongoose) {
    passport.use(new FacebookStragey({
        clientID: config.fb.appId,
        
    }))
    
}
