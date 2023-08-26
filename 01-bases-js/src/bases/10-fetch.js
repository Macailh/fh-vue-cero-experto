const apiKey = 'mm42fEr9bNSzcZ8v09klgI5qtQxKpU29'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(res => res.json())
    .then(({data}) => {
        const {url} = data.images.original
        
        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
    .catch(err => console.log(err))