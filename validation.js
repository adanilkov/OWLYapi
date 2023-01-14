const Joi = require('@hapi/joi');

const userRegisterValidation = (data) => {
    const validationSchema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['edu'] } }),
        pass: Joi.string().min(6).required()
    });
    return validationSchema.validate(data);
}

const userLoginValidation = (data) => {
    const validationSchema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['edu'] } }),
        pass: Joi.string().min(6).required()
    });
    return validationSchema.validate(data);
}

module.exports.userRegisterValidation = userRegisterValidation;
module.exports.userLoginValidation = userLoginValidation;