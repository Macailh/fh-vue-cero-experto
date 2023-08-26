import {heroes,owners} from '../data/heroes'
import superHeroes from '../data/heroes2.js'

// console.log(owners)
// console.log(heroes)

// const [d, m] = owners
// const [one, two, three] = heroes

// console.log(d, m)
// console.log(one, two, three)

// console.log('0------Super Heroess')
// console.log(superHeroes)

export const getHeroById = (id) => {
    return heroes.find((hero) => hero.id == id)
}

export const getHeroesByOwner = (owner)  => {
    return heroes.filter((hero) => hero.owner === owner)
}


// import { getHeroById, getHeroesByOwner } from "./bases/08-import-export.js"

// console.log('Hola Mundo!!')

// console.log('----Get heroe by id----')
// console.log(getHeroById(3))

// console.log('----Get heroe by owner----')
// console.log(getHeroesByOwner('DC'))
