import express from 'express'
import PostsController from './controllers/PostsController'

const routes = express.Router()

const postsController = PostsController()

routes.get('/', postsController.index)

export default routes