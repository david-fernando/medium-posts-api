function returnThumbnail(text: string){
    const mediumUrlBlocked = 'https://medium.com/_/stat?event=post'
    const placeholderUrl = 'https://placehold.jp/bdbdc2/ffffff/250x250.png?text=No%20image'

    const regex = /<img[^>]*\bsrc\s*=\s*["']([^"']*)["'][^>]*>/;
    const match = text.match(regex);

    let imageUrl = (match && match[1])? match[1] : null;

    imageUrl = (imageUrl?.includes(mediumUrlBlocked))? placeholderUrl : imageUrl

    return imageUrl
}

export default returnThumbnail