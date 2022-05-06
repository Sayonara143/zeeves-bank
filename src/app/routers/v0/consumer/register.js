import express from 'express'
const router = express.Router();
import '@babel/polyfill'

import consumerController from '../../../controllers/consumerController';

router.post('/', consumerController.register);


export default router