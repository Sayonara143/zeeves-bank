import express from 'express'
const router = express.Router()
 
import consumer from './v0/consumer/router'

router.use('/api/v0/consumer', consumer)

export default router