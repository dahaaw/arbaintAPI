const auth      = require('./auth/auth.routes');

const appRouter = (app) => {
    app.use('/v1/auth', auth);
}
module.exports = appRouter;