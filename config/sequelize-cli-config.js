'use strict';

const config = require('config');

module.exports = {
    [process.env.NODE_ENV || 'development']: config.get('hapi-avatars-api').pgConfig
};
