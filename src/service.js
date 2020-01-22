'use strict';
require('module-alias/register');
const Glue = require('glue');
const Manifest = require('./manifest');

const startServer = async() => {
    try {
        const server = await Glue.compose(Manifest, {
            relativeTo: __dirname
        });

        await server.start();
        console.log(`Server running at: http://localhost:${server.info.port}`);
        server.log(['log'], 'Service started');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
