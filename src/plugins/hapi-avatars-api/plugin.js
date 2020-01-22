'use strict';
const Implementation = require('./implementation');
const entryPoints = require('./entrypoints');

const register = (server, options) => {
    const instance = new Implementation(options);
    entryPoints(server, instance);
};

module.exports = {
    name: 'hapi-avatars-api',
    register
};
