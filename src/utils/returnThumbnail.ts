function returnThumbnail(urlImage: string){
    const mediumUrl = urlImage.split('.clientViewed')[0]
    const mediumUrlBlocked = 'https://medium.com/_/stat?event=post'
    const placeholderUrl = 'https://placehold.jp/bdbdc2/ffffff/250x250.png?text=No%20image'
    const imageUrl = (mediumUrl === mediumUrlBlocked)? placeholderUrl : urlImage

    return imageUrl
}

export default returnThumbnail