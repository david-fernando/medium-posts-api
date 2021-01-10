import convert from 'xml-js';

function convertToJson(data: any){
  const dataConverted = JSON.parse(convert.xml2json(data, {compact: true, spaces: 4 }))

  return dataConverted
}

export default convertToJson