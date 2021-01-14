import editText from '../utils/editText'

function returnJsonPosts(mediumPosts: any, mediumItems: Array<any>){
  let dataMedium: any = []

  const edit = editText()

  const textWithoutTags = edit.removeTags(mediumItems)

  const textCuted = edit.cutText(textWithoutTags)

  mediumPosts.items.map((item: any, index: number) =>{
    dataMedium.push({
    title: mediumPosts.items[index].title,
    link: mediumPosts.items[index].link,
    image: mediumPosts.items[index].thumbnail,
    description: textCuted[index].replace(/\n/g, '. ').replace('. ', '')
    })
  })

  return dataMedium
}

export default returnJsonPosts