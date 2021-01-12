import express from 'express'
import cors from 'cors'
import BotController from './controllers/BotController'

const routes = express.Router()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}


const botController = BotController()

routes.get('/', cors(corsOptions), botController.index)

export default routes