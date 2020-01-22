'use strict';
const uploadUserAvatarValidator = require('./validators/validate-upload-user-avatar');

const uploadUserAvatar = (server, plugin) => {
    server.route({
        method : 'POST',
        path   : '/avatars',
        handler: plugin.uploadUserAvatarHandler,
        options: {
            payload: {
                maxBytes: plugin.options.upload.maxBytes,
                output  : 'stream',
                parse   : true,
                allow   : 'multipart/form-data',
                timeout : 3500000
            },
            validate: uploadUserAvatarValidator,
            timeout : {
                socket: 3600000
            }
        }
    });
};

const entryPoints = (server, plugin) => {
    server.bind(plugin);
    uploadUserAvatar(server, plugin);
};

module.exports = entryPoints;
