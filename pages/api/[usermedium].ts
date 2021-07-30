import type { NextApiRequest, NextApiResponse } from 'next'

import returnJsonData from '../../utils/returnJsonData'
import returnJsonPosts from '../../utils/returnJsonPosts'

async function handler(request: NextApiRequest, response: NextApiResponse) {

  const {
    query: { usermedium }
  } = request

  try{
    const mediumPosts = (usermedium)? await returnJsonData(usermedium.toString()) : response.json({ message: 'Unspecified user' })
    
    const dataMedium = returnJsonPosts(mediumPosts, mediumPosts.items)

    return response.json({ dataMedium })
  }catch{
      return response.json({ message: 'User not found' })
  }
}

export default handler
