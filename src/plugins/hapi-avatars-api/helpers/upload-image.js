'use strict';

const JWT = require('jsonwebtoken');
const axios = require('axios');
const FormData = require('form-data');

const OWNER_ID = '1176f000-556b-4b5d-bf52-f0df4f367726';
const TWO_DAYS = 172800;

function getJwtToken(mediaJwt) {
    const options = {
        algorithm: 'HS256'
    };

    const secret = mediaJwt.secret;

    const token = JWT.sign({
        iss    : mediaJwt.issuer,
        exp    : Date.now() + TWO_DAYS,
        methods: '[post]'
    }, secret, options);

    return token;
};

async function uploadImage(file) {
    const token = getJwtToken(this.options.mediaJwt);
    const { hapi: { filename }, _data: buffer } = file;

    const formData = new FormData();
    formData.append('ownerIds', OWNER_ID);
    formData.append('jwt', token);
    formData.append('file', buffer, filename);


    const { data } = await axios.post(`${this.options.mediaApi}/images`, formData, {
        headers: formData.getHeaders()
    }).catch((error) => {
        console.error('Error uploading image');
        console.log(error.response.data);
    });

    return data.id;
};

module.exports = uploadImage;
