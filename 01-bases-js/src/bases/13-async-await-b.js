import giphyApi from "./11-axios"

const getImage = async() => {
    try {
        const {data} = (await giphyApi.get('/random')).data
        const {url} = data.images.original
        console.log(url)
            
    } catch (error) {
        console.log(error)
        throw error
    }
}

getImage()