'use strict';
const config      = require('config');
const packageInfo = require('@root/package.json');

const manifest = {
    server: {
        app: {
            slogan: packageInfo.description
        },
        debug: {
            request: ['error']
        },
        port: config.server.port
    },
    register: {
        plugins: [
            {
                plugin : './plugins/hapi-avatars-api/plugin.js',
                options: config.get('hapi-avatars-api')
            }
        ]
    }
};

module.exports = manifest;
