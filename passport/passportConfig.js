const LocalStrategy = require(passport - local).Strategy;
const { User, User } = require('./database');

exports.initializingPassport = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if (!user) return done(null, false);
            if (user.password != password) return done(null, false);
            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    }));

    passport.serializeUser((User, done) => {
        done(null, user.id);
    });

    passport.deSerializeUser(async (id, done) => {
        try {
            const User = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    });

};

exports.isAuthenticated = (req, res, next) => {
    if (req.user) return next();
    res.redirect("/login");
}