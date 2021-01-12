import { Request, Response } from 'express'
import axios from 'axios'
import editText from '../utils/editText'

function BotController(){
    async function index(request: Request, response: Response){
        const { usermedium } = request.query

        const rssMedium = `https://medium.com/feed/${usermedium}`
        const rssToJson = ` https://api.rss2json.com/v1/api.json?rss_url=${rssMedium}`

        const data = await axios.get(rssToJson)

        const mediumPosts = data.data

        const edit = editText()

        const textWithoutTags = edit.removeTags(mediumPosts.items)

        const textCuted = edit.cutText(textWithoutTags)
        
        let dataMedium: any = []

        mediumPosts.items.map((item: any, index: number) =>{
            dataMedium.push({
              title: mediumPosts.items[index].title,
              link: mediumPosts.items[index].link,
              image: mediumPosts.items[index].thumbnail,
              description: textCuted[index].replace(/\n/g, '. ').replace('. ', '')
            })
        })

        response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin");

        return response.json({ dataMedium })
    }
    return {
        index
    }
}

export default BotController