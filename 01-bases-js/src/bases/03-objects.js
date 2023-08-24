const person = {
    name: 'Salvador',
    lastname: 'German',
    age: '23',
    address: {
        city: 'Ahualulco de Mercado',
        zip: '46730',
        lat: '45.4543',
        lng: '78.3423'
    }
}

const secondPerson = person
const thirdPerson = { ...person }

secondPerson.name = 'Enrique'

console.log(person)
console.log(secondPerson)
console.log(thirdPerson)