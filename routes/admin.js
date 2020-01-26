
let User = require('../database/user');

module.exports = (express, passport) => {
    let router = express.Router();

   
    router.get('/user/all', passport.authenticate('jwt', { session: false }), (req, res) => {
        User.all()
            .then(result => res.json({ con: true, msg: result }))
            .catch(err => res.json({ con: false, msg: err }));
    })

    return router;
}