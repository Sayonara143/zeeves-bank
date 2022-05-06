import consumerService from "../services/consumer.service";
import consumerValidation from "../validations/consumer";

const consumerController = {
    async register(req,res) {
        const data = {
            ...req.body,
            sourceOfFunds: "OTHER",
            sourceOfFundsOther: "sourceOfFundsOther",
            occupation: "ACCOUNTING",
            timezone: "Europe/Paris",
            firebaseToken: {
                "device": "A920936F-04C2-48E4-AAE1-6A4E3C581246",
                "token": "dnROHH-GWkvrpIQaDmkUJf:APA91bEaO8v9vxk_1C6gaW1QrpWnFCc0BhbYrUtd1hIeTbKRMa20r30BrQNGw9S884yiEB_5cqPLMBJFrfV26gBiMkfJjSu5DCO-pRz4uS1GjpLcBqvwCAs7aPxlWA3jCqECE3Ujsw1q"
            }
        }
        try {
            const {error} = consumerValidation.reg(data)
            if (error) {
                res.status(400).json({message: error.details[0].message})
                return
            }
            const responseStriga = await consumerService.registerConsumer(data)
            if (responseStriga.status === 'error'){
                res.status(400).json({message: responseStriga.data.message})
                return
            }
            res.status(200).json(responseStriga)
        } catch (err) {
            console.log(err)
            res.status(500).json({message: "sorry, the server crashed"});
        }
    }
}

export default consumerController