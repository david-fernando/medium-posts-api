import editText from '../utils/editText'

function returnJsonPosts(mediumPosts: any, mediumItems: Array<any>){
  let dataMedium: any = []

  const edit = editText()

  const textCuted = edit.cutText(mediumItems)

  mediumPosts.items.map((item: any, index: number) =>{
    dataMedium.push({
    title: mediumPosts.items[index].title,
    link: mediumPosts.items[index].link,
    image: mediumPosts.items[index].thumbnail,
    description: textCuted[index].replace(/\n/g, '. ').replace('. ', ''),
    date: mediumPosts.items[index].publishedAt
    })
  })

  return dataMedium
}

export default returnJsonPosts
