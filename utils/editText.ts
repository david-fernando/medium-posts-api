function editText(){
  function cutText(text: Array<any>){
    let textCuted: any = []

    text.map((item: any, index: number) =>{
      textCuted.push(text[index].description.match(/<p>(.*?)<\/p>/g)[0].replace(/<\/?[A-Za-z]>/g,''))
    })

    return textCuted
  }

  return {
    cutText
  }
}

export default editText