import type { NextApiRequest, NextApiResponse } from 'next'
import returnJsonData from '../../utils/returnJsonData'

async function handler( request: NextApiRequest, response: NextApiResponse) {
    const { usermedium } = request.query

    const mediumPosts = (usermedium) && await returnJsonData(usermedium.toString())

    response.json({mediumPosts})
}

export default handler
