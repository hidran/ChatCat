/**
 * Created by arias on 01/04/2015.
 */
module.exports = function(express, app){
    var router = express.Router();
    console.log(router.route);
    app.route('/').get( function(req, resp, next){
        resp.render('index.html',{title:'welcome to chatcat '});

    });

    app.get('/setColor',function(req, resp, next){
       req.session.favColor ="red";
        resp.send('set fav color');

    });
    app.get('/getColor',function(req, resp, next){
        resp.send('your favorite color is: '+ req.session.favColor)

    })
    app.route('/chatrooms').get( function(req, resp, next){
        resp.render('chatrooms',{title:'welcome to chatroom '});

    });
 
   app.use('/', router);
}
