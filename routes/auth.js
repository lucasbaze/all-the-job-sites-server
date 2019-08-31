const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] })
    );

    app.get('auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        console.log('logging out user');
        req.logout();
    });
};
