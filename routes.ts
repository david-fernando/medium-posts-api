import express from 'express'
import cors from 'cors'
import PostsController from './controllers/PostsController'


const routes = express.Router()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const postsController = PostsController()

const postsRoute = (csrfProtection: any) => routes.get('/', csrfProtection, cors(corsOptions), postsController.index)

export default postsRoute