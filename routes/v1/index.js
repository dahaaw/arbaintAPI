const auth      = require('./auth/auth.routes');
const user      = require('./user');

const {authenticate} = require('../../services/v1/oauth2/oauth2-adapter')

const appRouter = (app) => {
    app.use('/v1/auth', auth);
    app.use('/v1/user', authenticate, user);
}
module.exports = appRouter;