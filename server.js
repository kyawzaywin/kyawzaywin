require('dotenv').config();
let port= process.env.PORT || 8080;
let express = require('express'),
    app = express(),
    jwt = require('jsonwebtoken'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    path = require('path'),
	User = require('./database/user');

    let jwtOptions = {};
    jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = process.env.SECRET;

    
    let myStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
        let email = payload.email;
        let name = payload.name;
        User.findByEmail(email)
            .then(user => {
                if (user.name == name) {
                    done(null, user);
                }
            })
            .catch(err => done(err, null));
    });


    app.use(express.static(path.join(__dirname, '/dist/my-dream')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    passport.use(myStrategy);
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/my-dream/index.html'));
})
    let userRoute = require("./routes/user")(express, jwt);
    let adminRoute = require('./routes/admin')(express, passport);
    let guestRoute = require('./routes/guest')(express);

    app.use("/user", userRoute);
	app.use("/admin", adminRoute);
	app.use("/", guestRoute);


	app.listen(port, () => {
    console.log(`Server is running at 8080` );
});
