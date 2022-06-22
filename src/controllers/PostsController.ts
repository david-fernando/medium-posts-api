import { Request, Response } from 'express'
import returnJsonData from '../utils/returnJsonData'
import returnJsonPosts from '../utils/returnJsonPosts'

function PostsController(){
    async function index(request: Request, response: Response){
        const { usermedium } = request.query

        try{
            const mediumPosts = (usermedium)? await returnJsonData(usermedium.toString()) : response.json({ message: 'Unspecified user' })
            
            const dataMedium = returnJsonPosts(mediumPosts, mediumPosts.items)

            return response.json({ dataMedium })
        }catch{
            return response.json({ message: 'User not found' })
        }
    }
    return {
        index
    }
}

export default PostsController