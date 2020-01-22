'use strict';
module.exports = {
    server: {
        port: process.env.PORT || 3000,
        env : process.env.NODE_ENV || 'development'
    },
    'hapi-user-avatars-api': {
        pgConfig: {
            host    : process.env.PG_HOST || 'localhost',
            database: process.env.PG_DATABASE || 'tb_user_avatar_development',
            username: process.env.PG_USERNAME || 'postgres',
            password: process.env.PG_PASSWORD || '',
            pgPort  : process.env.PG_PORT || 5432,
            dialect : 'postgres',
            pool    : {
                max : 5,
                min : 0,
                idle: 10000
            }
        },
        mediaJwt: {
            issuer: process.env.MEDIA_API_KEY || 'issuer',
            secret: process.env.MEDIA_API_SECRET || 'jwtSecret'
        }
    },
    'hapi-cors': {
        origin: ['*']
    }
};
