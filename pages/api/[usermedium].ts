import type { NextApiRequest, NextApiResponse } from 'next'
import returnJsonData from '../../utils/returnJsonData'
import returnJsonPosts from '../../utils/returnJsonPosts'

async function handler( request: NextApiRequest, response: NextApiResponse) {
    const { usermedium } = request.query

    try{
        const mediumPosts = (usermedium) && await returnJsonData(usermedium.toString())

        const dataMedium = returnJsonPosts(mediumPosts, mediumPosts.items)

        response.json({dataMedium})
    }catch{
        return response.json({ message: 'User not found' })
    }
}

export default handler
