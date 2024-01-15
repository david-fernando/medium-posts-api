import { load } from "cheerio";

function returnThumbnail(text: string){
    const mediumUrlBlocked = 'https://medium.com/_/stat?event=post'
    const placeholderUrl = 'https://placehold.jp/bdbdc2/ffffff/250x250.png?text=No%20image'

    // const regex = /<img\s+[^>]*\bsrc\s*=\s*["']([^"']*)["'][^>]*>/;
    // const match = text.match(regex);
    const cheerio = load(text)

    let imageUrl = cheerio('img').first().attr('src')

    imageUrl = (imageUrl?.includes(mediumUrlBlocked))? placeholderUrl : imageUrl

    return imageUrl
}

export default returnThumbnail