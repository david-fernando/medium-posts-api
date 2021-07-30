import striptags from 'striptags'
import truncate from 'truncate'

function editText(){
  function removeTags(data: Array<any>){
    let textWithoutTags: any = []

    data.map((item: any, index: number) =>{
      textWithoutTags.push(striptags(data[index]))
    })

    return textWithoutTags
  }
  function cutText(text: Array<any>){
    let textCuted: any = []

    const matchExpression  = /<p>(.*?)<\/p>/g

    const replaceExpression = /<\/?[A-Za-z]>/g

    const getFirstParagraph = (text: any) => text.match(matchExpression)[0].replace(replaceExpression,'')

    text.map((item: any, index: number) =>{
      textCuted.push(getFirstParagraph(text[index].description))
    })

    return textCuted
  }

  return {
    removeTags,
    cutText
  }
}

export default editText