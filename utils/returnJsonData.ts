import axios from 'axios'

async function returnJsonData(usermedium: string){
  const rssMedium = `https://medium.com/feed/@${usermedium}`
  const rssMediumWithoutAtSignal = `https://medium.com/feed/${usermedium}`
  const rssToJson = (rss: string) => `https://api.rss2json.com/v1/api.json?rss_url=${rss}`

  const data = await Promise.any([
    axios.get(rssToJson(rssMedium)).then(data => data.data),
    axios.get(rssToJson(rssMediumWithoutAtSignal)).then(data => data.data)
  ])

  return data
}

export default returnJsonData