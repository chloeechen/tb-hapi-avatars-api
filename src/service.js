'use strict';

const Glue = require('@hapi/glue');
const Manifest = require('./manifest');

const startServer = async() => {
    try {
        const server = await Glue.compose(Manifest, {
            relativeTo: __dirname
        });

        await server.start();
        server.log(['log'], 'Service started');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
