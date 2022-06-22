import sanitizeHtml from 'sanitize-html'

function editText(){
  function cutText(text: Array<any>){
    let textCuted: any = []
    let sanitizeText: any
    let sanitizedText: string
    let tags: string

    let indexChosen: number

    const tagsRegex = /<p>(.*?)<\/p>/g

    const textRegex = /<\/?[A-Za-z]>/g

    const transformTags = {
      'a': '',
      'div': '',
      'figure': ''
    }

    text.map((item: any, index: number) =>{

      sanitizeText = sanitizeHtml(text[index].description, { transformTags })

      tags = sanitizeText.match(tagsRegex)[0]

      indexChosen = (tags === '<p></p>')? 1 : 0

      sanitizedText = sanitizeText.match(tagsRegex)[indexChosen].replace(textRegex,'')

      textCuted.push(sanitizedText)
    })

    return textCuted
  }

  return {
    cutText
  }
}

export default editText