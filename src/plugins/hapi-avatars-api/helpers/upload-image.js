'use strict';

const jwt = require('jsonwebtoken');
const axios = require('axios');
const FormData = require('form-data');
const http = require('http');
const request = require('request');


const OWNER_ID = '1176f000-556b-4b5d-bf52-f0df4f367726';
const TWO_DAYS = 172800;

function getJwtToken(mediaJwt) {
    const options = {
        algorithm: 'HS256'
    };

    const secret = mediaJwt.secret;

    const token = jwt.sign({
        iss    : mediaJwt.issuer,
        exp    : Date.now() + TWO_DAYS,
        methods: '[post]'
    }, secret, options);

    return token;
};

async function uploadImage(file) {
    const token = getJwtToken(this.options.mediaJwt);
    console.log('token', token);

    const formData = new FormData();
    formData.append('ownerIds', OWNER_ID);
    formData.append('jwt', token);
    formData.append('file', file);

    // return new Promise((r, j) => {
    //     request.post({
    //         url: this.options.mediaApi,
    //         formData
    //     }, (err, response) => {
    //         if (err) { j(err); }
    //         r(response);
    //     });
    // });

    // request.post({url: this.options.mediaApi, formData }, function optionalCallback(err, httpResponse, body) {
    //     if (err) {
    //         return console.error('upload failed:', err);
    //     }
    //     console.log('Upload successful!  Server responded with:', body);
    // });

    // const request = http.request({
    //     method  : 'POST',
    //     hostname: this.options.mediaApi,
    //     path    : '/images',
    //     headers : formData.getHeaders()
    // }, (res) => {
    //     console.log(`STATUS: ${res.statusCode}`);
    //     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    //     res.setEncoding('utf8');
    //     res.on('data', (chunk) => {
    //         console.log(`BODY: ${chunk}`);
    //     });
    //     res.on('end', () => {
    //         console.log('No more data in response.');
    //     });
    // });

    // formData.pipe(request);

    // request.on('response', function(res) {
    //     console.log(res.statusCode);
    // });

    // request.write(formData);
    // request.end();

    // return 22;

    try {
        await axios.post(`${this.options.mediaApi}/images`, formData, {
            headers: formData.getHeaders()
        });
    } catch (err) {
        console.log('error', err.response.statusText);
    }

    return 22;

    // try {
    //     const data = await axios.post(`${this.options.mediaApi}/images`, {
    //         bytes   : file.toString('base64'),
    //         ownerIds: OWNER_ID,
    //         jwt     : token,
    //         config  : { headers: { 'Content-Type': 'json' } }
    //     });

    //     return data;
    // } catch (err) {
    //     console.log('error', err.response);
    // }
};

module.exports = uploadImage;
