<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-test-id="counter">{{ counter }}</p>

  <div>
    <button @click="decrease">-1</button>
    <button v-on:click="increase">+1</button>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            required: true,
            default: 1,
            validator(value) {
                return value >= 0
            }
        }
    },
    name: 'CounterName',
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {
            return this.counter * this.counter
        },
        increase() {
            // this.counter = this.counter + 1
            this.counter++
        },
        decrease() {
            this.counter--
        }
    },
    computed: {
        squareCounter() {
            return this.counter * this.counter
        },
        customTitle() {
            return this.title ? this.title : 'Counter'
        }
    }
}
</script>

<style>
button {
    background-color: darkseagreen;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.25s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition: 0.25s ease-in-out;
}
</style>