import axios from 'axios'

const apiKey = 'mm42fEr9bNSzcZ8v09klgI5qtQxKpU29'
const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

giphyApi.get('/random').then(res => {
    const {data} = res.data
    const {url} = data.images.original
    
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})

export default giphyApi