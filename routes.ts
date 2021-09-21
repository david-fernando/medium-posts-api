import express from 'express'
import cors from 'cors'
import csrf from 'csurf'
import PostsController from './controllers/PostsController'

const csrfProtection = csrf({ cookie: true })

const routes = express.Router()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const postsController = PostsController()

routes.get('/', csrfProtection, cors(corsOptions), postsController.index)

export default routes