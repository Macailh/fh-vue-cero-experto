const arr = new Array()
console.log(arr)

const arr2 = []
console.log(arr2)

const arr3 = [1,2,3,4,5]
arr3.push(6)
// arr3 = [1,2,4]
console.log(arr3)

const arr4 = arr
arr4.push(3)
console.log(arr)
console.log(arr4)

const arr5 = [...arr2]
arr5.push(1)
console.log(arr2)
console.log(arr5)


const arr6 = [1,2,3,4,5,6,7,8,9]
const arr7 = arr6.map( function(n){
    return n * 2
})
console.log(arr6)
console.log(arr7)
