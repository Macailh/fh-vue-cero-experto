const person = {
    name: 'Salvador',
    age: 23,
    codeName: 'Saen'
}

const {name, age, codeName, power = 'Do not have power'} = person

console.log(person.name)
console.log(person.age)
console.log(person.codeName)

console.log(name)
console.log(age)
console.log(codeName)
console.log(power)

const createHero = ({name, age, codeName, power = 'N'}) => 
    ({
        id: 123,
        name,
        age,
        codeName,
        power,
    })


console.log(createHero(person))