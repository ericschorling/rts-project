export const getPosts = async(subject) => {
    const response = await fetch (`https://hn.algolia.com/api/v1/search?query=${subject}&tags=story`)
    const posts = await response.json()
    return posts.hits
}

