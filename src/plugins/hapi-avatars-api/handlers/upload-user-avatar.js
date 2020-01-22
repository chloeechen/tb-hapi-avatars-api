'use strict';

const { memberAvatars } = require('@models/index');

async function uploadUserAvatars(request) {
    const { payload : { memberId, file, imageId } } = request;
    console.log('ssssss', memberId);

    const imageIdForAvatar = imageId ||  await this.uploadImageHelper(file);
    console.log('imageIdForAvatar', imageIdForAvatar);

    return {imageIdForAvatar};
}


module.exports = uploadUserAvatars;
