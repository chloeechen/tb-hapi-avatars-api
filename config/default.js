'use strict';
module.exports = {
    server: {
        port: process.env.PORT || 3000,
        env : process.env.NODE_ENV || 'development'
    },
    'hapi-avatars-api': {
        pgConfig: {
            host    : process.env.PG_HOST || 'localhost',
            database: process.env.PG_DATABASE || 'tb_user_avatar_development',
            username: process.env.PG_USERNAME || 'postgres',
            password: process.env.PG_PASSWORD || 'postgres',
            pgPort  : process.env.PG_PORT || 5432,
            dialect : 'postgres',
            pool    : {
                max : 5,
                min : 0,
                idle: 10000
            }
        },
        upload: {
            maxBytes: 1024 * 1024 * 50
        },
        mediaJwt: {
            issuer: process.env.MEDIA_API_KEY || 'db16e857e9924e71f599e31413fb19d2',
            secret: process.env.MEDIA_API_SECRET || '7aef8b426fa6bfa929cbd4e423e9634e'
        },
        mediaApi: process.env.MEDIA_API || 'https://media-api.xogrp.com'
    },
    'hapi-cors': {
        origin: ['*']
    }
};
