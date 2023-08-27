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
    }
})

app.mount('#myApp')