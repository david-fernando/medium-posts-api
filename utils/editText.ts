import sanitizeHtml from 'sanitize-html'

function editText(){
  function cutText(text: Array<any>){
    let textCuted: any = []
    let sanitizedText: any

    const tagsRegex = /<p>(.*?)<\/p>/g

    const textRegex = /<\/?[A-Za-z]>/g

    const transformTags = {
      'a': '',
      'div': '',
      'figure': ''
    }

    text.map((item: any, index: number) =>{

      sanitizedText = sanitizeHtml(text[index].description, { transformTags })

      sanitizedText.match(tagsRegex)[0].replace(textRegex,'')

      textCuted.push(sanitizedText)
    })

    return textCuted
  }

  return {
    cutText
  }
}

export default editText