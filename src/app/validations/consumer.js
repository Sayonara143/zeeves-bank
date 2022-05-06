import Joi from "joi"

const consumerValidation = {
    reg(data) {
    
        const shema = Joi.object({
            name: Joi.string().min(1).max(255).required(),
            surname: Joi.string().min(1).max(255).required(),
            email: Joi.string().min(1).max(255).required().email(),
            mobileCountryCode: Joi.string().required(),
            mobileNumber: Joi.string().min(1).max(255).required(),
            userId: Joi.string().min(1).max(255).required(),
            baseCurrency: Joi.string().min(1).max(255).required(),
            dateOfBirth: {
                year: Joi.number().required(),
                month: Joi.number().min(1).max(12).required(),
                day: Joi.number().min(1).max(31).required(),
            },
            sourceOfFunds: Joi.string().required(),
            sourceOfFundsOther: Joi.string().required(),
            occupation: Joi.string().required(),
            timezone: Joi.string().required(),
            firebaseToken: {
                device: Joi.string().required(),
                token: Joi.string().required()
            }
        })
    
        return shema.validate(data)
    }
}



export default consumerValidation