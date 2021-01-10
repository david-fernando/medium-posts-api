import { Request, Response } from 'express'
import axios from 'axios'

import convertToJson from '../utils/convertToJson'
import searchImage from '../utils/searchImage'

function BotController(){
    async function index(request: Request, response: Response){
        const { usermedium } = request.query
        const data = await axios.get(`https://medium.com/feed/@${usermedium}`)
        const dataConverted = convertToJson(data.data)
        const dataArray = dataConverted.rss.channel.item
        const arrayImage = searchImage(dataArray)
        let dataMedium: any = []

        dataArray.map((item: any, index: number) =>{
            dataMedium.push({
              title: dataConverted.rss.channel.item[index].title._cdata,
              link: dataConverted.rss.channel.item[index].link._text,
              image: arrayImage[index]
            })
        })

        response.json({ dataMedium })
    }
    return {
        index
    }
}

export default BotController