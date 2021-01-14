import axios from 'axios'

async function returnJsonData(usermedium: string){
  const rssMedium = `https://medium.com/feed/${usermedium}`
  const rssToJson = ` https://api.rss2json.com/v1/api.json?rss_url=${rssMedium}`

  const data = await axios.get(rssToJson)

  return data.data
}

export default returnJsonData