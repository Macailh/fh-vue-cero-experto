const myName = 'Salvador'
const myLastname = 'German'

const fullName = `${myName} ${myLastname}`
console.log(fullName)

function getGreeting(name) {
    return `Hi, ${name}`
}

console.log(`Este es un saludo: ${getGreeting(myName)}`)