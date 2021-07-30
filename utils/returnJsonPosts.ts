import editText from './editText'

function returnJsonPosts(mediumPosts: any, mediumItems: Array<any>){
  let dataMedium: any = []

  const edit = editText()

  const textCuted = edit.cutText(mediumItems)

  const textWithoutTags = edit.removeTags(textCuted)

  mediumPosts.items.map((item: any, index: number) =>{
    dataMedium.push({
    title: mediumPosts.items[index].title,
    link: mediumPosts.items[index].link,
    image: mediumPosts.items[index].thumbnail,
    description: textWithoutTags[index].replace(/\n/g, '. ').replace('. ', '')
    })
  })

  return dataMedium
}

export default returnJsonPosts