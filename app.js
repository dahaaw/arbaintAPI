const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const {oauth2, authenticate} = require('./services/v1/oauth2/oauth2-adapter');

app.oauth = oauth2;

const routes = require('./routes/v1');

app.use(cors({
    origin:"*",
    methods: ['GET'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ROUTES
routes(app);

module.exports = app;
