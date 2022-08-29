import type { NextApiRequest, NextApiResponse } from 'next'

function handler( request: NextApiRequest, response: NextApiResponse) {
    const { usermedium } = request.query
    response.json({usermedium})
}

export default handler
