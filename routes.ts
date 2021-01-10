import express from 'express'
import BotController from './controllers/BotController'

const routes = express.Router()

const botController = BotController()

routes.get('/', botController.index)

export default routes