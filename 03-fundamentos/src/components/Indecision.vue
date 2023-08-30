<template>
  <img src="https://via.placeholder.com/250" alt="bg">
  <h2>Indecision</h2>

  <div class="indecision-container">
    <input type="text" placeholder="Hazme una pregunta" v-model="question">
    <p>Recurda terminal con un signo de interrogación (?)</p>

    <div>
        <h2>{{question}}</h2>
        <h1>Si, No, ...pensando</h1>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            question: 'Question'
        }
    },
    watch: {
      question(value, oldValue) {
        console.log({value, oldValue})
        console.log(value.includes('?'))
        if(!value.includes('?')) return
      }
    }

}
</script>

<style scoped>
  img, .bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    min-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
  }

  .bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .indecision-container {
    position: relative;
    z-index: 99;
  }

  input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
  }

  input:focus {
    outline: none;
  }

  p {
    color: white;
    font-size: 20px;
    margin-top: 3px;
  }

  h1, h2 {
    color: white;
  }

  h2 {
    margin-top: 150px;
  }
</style>