// let numbers = [1, 2, 3, 4, 5] // format array
// //            [             ]
// //            [1,             ]

// numbers.push(6) //--> menaruh angka di blakang
// numbers.unshift(0) //--> menaruh angka di depan

// console.log(numbers)

// 1, 2, 3, 4, 5  --> array angka
// 'esra', 'alwi', 'esra' --> array string(nama)
//[{name: 'Budi'}] --> array of object

// //---> array multi dimensi
// let otherNumbers = [
//     [
//         [0,1], 
//         2,
//         3
//     ],
//     [4, 5],
//     [6, 7, 8, 9]
// ]

// //---> array multi dimensi
// let otherNumbers = [
//     //[[0,1],2,3],
//     [1,2,3],    // 0
//     [4, 5],     // 1
//     [6, 7, 8, 9]// 2
// ]

// console.log(otherNumbers[0]) // masih mengembalikan array
// console.log(otherNumbers[0][1]) // return 2

// const counter = {
//     val:0,
//     increment(){
//         this.val += 1
//     }
// }

// console.log(counter)
// counter.increment()
// console.log(counter)


// //---------->
// const counter = {
//     val:0,
//     increment(){
//         this.val += 1
//     }
// }

// console.log(this)


//ArroW Function
function sum(a,b){
    return a + b
}


// const sunArrow = (a,b) =>{
//     return a + b
// }
//() =>{}


// const sunArrow = (a,b) => a + b
// console.log(sunArrow(10,20))

const sunArrow = (a,b) => a + b  // implicit return
const thisArrow = () => this
const thisFunction = function(){
    return this
}

this.value = 1

console.log(this)
console.log(thisArrow())  //var
//console.log(thisFunction()) //let


