import { getHeroById } from "./bases/08-import-export"

// console.log('Inicio')

// new Promise((resolve, reject) => {
//     console.log('Promise body')
//     resolve('Resolute promise')
//     // reject('Resolute promise with error')
// })
// .then(console.log)
// .catch(console.log)
// // .then(msg => console.log(msg))
// // .catch(err => console.log(err))
// console.log('Fin')


const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)

            if (hero) {
                resolve(hero)
            } else {
                reject('Hero not exists')
            }
        }, 1000)
    })
}

getHeroByIdAsync(3).then(h => console.log(`The hero is: ${h.name}`)).catch(console.log)