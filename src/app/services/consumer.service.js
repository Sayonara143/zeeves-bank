import { instanceV0 } from "./api"

const consumerService = {
    
    async registerConsumer (data) {
        let feedback = {}
        await instanceV0.post(`consumer/register`, data)
        .then((response)=>{
            // console.log(response.data)
            feedback = {
                status: 'success',
                data: response.data
            }
        })
        .catch((err)=>{
            // console.error(err.response.data)
            feedback = {
                status: 'error',
                data: err.response.data
            }
        })
        return feedback
    } 
}

export default consumerService