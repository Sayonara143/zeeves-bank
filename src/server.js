import console from 'console'
import express from 'express'
import http from 'http'
import logger from 'morgan'
import mainRouter from './app/routers/router'
import consumerService from './app/services/consumer.service'
// import cors from 'cors'
// import * as config from './config/config'


// const corsOptions = {
//   origin: ['http://localhost:3000'],
// }

const app = express()
const server = http.createServer(app)
const startServer = async () => {
//   app.use(cors(corsOptions))
  app.use(logger('dev'))
  app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: true }))
  app.use(mainRouter)
  const port = process.env.PORT || 8080
  server.listen(port, async () => { 
    console.log(`[SERVER] start ${port}`)
  })
}
startServer()