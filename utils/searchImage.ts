function searchImage(data: any){
  let text;
  let image: any;
  let arrayImage: any = []
  const regexp = new RegExp(/.*jpeg/)
  data.map((item: any, index: number) =>{
    text = data[index]['content:encoded']._cdata
    image = regexp.exec(text)
    arrayImage.push(image[0].split(/"/g)[3])
  })

  return arrayImage
}

export default searchImage