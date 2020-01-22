'use strict';
const Joi = require('joi');

module.exports = {
    payload: {
        memberId: Joi.string().required(),
        file    : Joi.any().optional(),
        imageId : Joi.string().optional()
    }
};
