
// function greeting(name) {
//     return `Hi ${name}, How old are you?`
// }

// const greeting = function(name) {
//     return `Hi ${name}, How old are you?`
// }

const greeting = (name = 'John') => `Hi ${name}, How old are you?`

const name = 'Adrian'
console.log(greeting(name))
console.log(greeting())

const getUser = () => {
    return {
        uuid: 'ASFE3',
        username: 'macailh'
    }
}

console.log(getUser())

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

const exists = heroes.some((hero) => hero.id === 1)
console.log(exists)

const {id} = heroes.find((hero) => hero.id === 1)
console.log(id)
