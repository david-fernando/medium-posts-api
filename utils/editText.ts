import striptags from 'striptags'
import truncate from 'truncate'

function editText(){
  function removeTags(data: Array<any>){
    let textWithoutTags: any = []

    data.map((item: any, index: number) =>{
      textWithoutTags.push(striptags(data[index].description))
    })

    return textWithoutTags
  }
  function cutText(text: Array<string>){
    let textCuted: any = []

    text.map((item: any, index: number) =>{
      textCuted.push(truncate(text[index], 90))
    })

    return textCuted
  }

  return {
    removeTags,
    cutText
  }
}

export default editText