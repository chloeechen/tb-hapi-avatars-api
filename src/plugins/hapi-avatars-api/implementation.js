'use strict';
class Plugin {
    constructor(options = {}) {
        this.options = { ... Plugin.DEFAULTS, ...options };
    }
}

Plugin.DEFAULTS = {};

Object.assign(Plugin.prototype, {
    uploadUserAvatarHandler: require('./handlers/upload-user-avatar')
});
