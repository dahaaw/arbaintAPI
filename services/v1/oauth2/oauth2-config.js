const { ENV, ENV_KEY } = require("../../../config/environment");

module.exports = {
    clients: [
        {
            name: 'WEB',
            id: ENV.get(ENV_KEY.APP_CLIENT_ID),
            clientId: ENV.get(ENV_KEY.APP_CLIENT_ID),
            clientSecret: ENV.get(ENV_KEY.APP_CLIENT_SECRET),
            grants: ["password", "refresh_token", "client_credentials"],
            accessTokenLifetime: ENV.get(ENV_KEY.ACCESS_TOKEN_LIFE_TIME),
            refreshTokenLifetime: ENV.get(ENV_KEY.REFRESH_TOKEN_LIFE_TIME),
        },
        {
            name: 'BACKEND',
            id: 'BACKEND',
            clientId: 'BACKEND',
            clientSecret: 'BACKENDSC',
            grants: ["password", "refresh_token", "client_credentials"],
            accessTokenLifetime: ENV.get(ENV_KEY.ACCESS_TOKEN_LIFE_TIME),
            refreshTokenLifetime: ENV.get(ENV_KEY.REFRESH_TOKEN_LIFE_TIME),
        },
    ],
};
