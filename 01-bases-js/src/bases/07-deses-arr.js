const characters = ['Goku', 'Vegetta', 'Trunks']

console.log(characters[0])
console.log(characters[1])
console.log(characters[2])

const [g, v, t] = characters

console.log('--------------With------------------')
console.log(g,v,t)

const [,,trunks] = characters
console.log(trunks)

const [,,,gotten = 'Without value'] = characters
console.log(gotten)

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['first', 'second'])
console.log(letters, numbers)
