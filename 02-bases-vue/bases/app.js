const app = Vue.createApp({
    // template:`
    // <h1>Hello world</h1>
    // <p>From app.js</p>
    // <p>{{ 1 + 1 }}</p>
    // <p>[1,2,3,4,5,6]</p>
    // <p>{{ true ? 'Active': 'Inactive'}}</p>
    // `
    // methods: {},
    // watch: {}, 

    // setup() {}

    data() {
        return {
            message: 'Hello world!!!',
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(event) {
            console.log('Hellow', event)
            this.author = 'Salvador German'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')