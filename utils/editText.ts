function editText(){
  function cutText(text: Array<any>){
    let textCuted: any = []

    const tagsRegex = /<p>(.*?)<\/p>/g

    const textRegex = /<\/?[A-Za-z]>/g

    text.map((item: any, index: number) =>{
      textCuted.push(text[index].description.match(tagsRegex)[0].replace(textRegex,''))
    })

    return textCuted
  }

  return {
    cutText
  }
}

export default editText