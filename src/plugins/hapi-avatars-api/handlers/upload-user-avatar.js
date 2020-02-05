'use strict';

const { memberAvatars } = require('@models');
const uploadImageHelper = require('../helpers/upload-image');

async function uploadUserAvatars(request, h) {
    const { payload : { memberId, file, imageId } } = request;
    console.log('memberId', memberId);

    const imageIdForAvatar = imageId ||  await uploadImageHelper(file);
    console.log('imageIdForAvatar', imageIdForAvatar);

    return h.response('Create successfully').code(201);
}


module.exports = uploadUserAvatars;
