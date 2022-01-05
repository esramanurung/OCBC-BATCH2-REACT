
// Tamabahan (hasil function anonymous)
// function display(value){
//     console.log(value)
// }

const { default: axios } = require("axios")
const { error } = require("console")

// function calculator(number1, number2, callback){
//     console.log(callback)
//     const result = number1 + number2
//     //kalau sebelumnya return result ganti jadi callback
//     callback(result)
// }
// calculator(10, 15, function(){})



//Tambahan(hasil 25)
// function display(value){
//     console.log(value)
// }

// function calculator(number1, number2, callback){
//     //console.log(callback)
//     const result = number1 + number2
//     //kalau sebelumnya return result ganti jadi callback
//     callback(result)
// }
// //calculator(10, 15, function(){})
// calculator(10, 15, display)



// function display(value){
//     console.log(value)
// }

// function calculator(number1, number2, callback){
//     console.log(callback)
//     const result = number1 + number2
//     //kalau sebelumnya return result ganti jadi callback
//     callback(result)
// }
// //calculator(10, 15, function(){})
// calculator(10, 15, display)


// //console.log(display)

// //--------->Cara Kerja
// // function calculator(number1, number2, callback)
// calculator(10, 15, function(value){
//     console.log(value)
// })

// //1. masukkan parameter (angka + function)



//Tambahan
// function display(value){
//     console.log(value)
// }

// function calculator(number1, number2, callback){
//     console.log(callback)
//     const result = number1 + number2
//     //kalau sebelumnya return result ganti jadi callback
//     callback(result)
// }
// const displayVar = function(value){
//     console.log(value)

// }

// calculator(10, 15, display)
// calculator(10, 15, (value)=>{
//     console.log(value)
// })


//promise
// function buatJanji(message){
//     return new Promise((resolve, reject)=>{
//         if(message === '') return reject('Janji harus diisi')

//         return resolve('berhasil ditepati')
//     })
// }

// console.log(buatJanji('adakan kelas akhir tahun'))


// //Tambahan
// function buatJanji(message){
//     return new Promise((resolve, reject)=>{
//         if(message === '') return reject('Janji harus diisi')

//         return resolve('berhasil ditepati')
//     })
// }
// function ambilData(){
//     return new Promise((resolve, reject) =>{
        
//         axios
//         .get('https://jsonplaceholder.typicode.com/todos')
//         .then(result =>{
//             resolve(result)
//         })

//     })
// }
// console.log(ambilData())




//Tambahan
// function buatJanji(message){
//     return new Promise((resolve, reject)=>{
//         if(message === '') return reject('Janji harus diisi')

//         return resolve('berhasil ditepati')
//     })
// }
// function ambilData(){
//     return new Promise((resolve, reject) =>{
        
//         axios
//         .get('https://jsonplaceholder.typicode.com/todos')
//         .then(result =>{
//             resolve(result)
//         })
//         .catch(error =>{
//             reject(error)

//         })

//     })
// }
// ambilData()
// .then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


//Tambahan
function buatJanji(message){
    return new Promise((resolve, reject)=>{
        if(message === '') return reject('isi Janji harus diisi')

        //return resolve('berhasil ditepati')
        //return resolve('berhasil ditepati: ${message}')
        return resolve(`berhasil ditepati: ${message}`)
    })
}
buatJanji('')
.then((result)=>{
    console.log(result)

    return buatJanji('Kelas akhir tahun')
})
.catch((error)=>{
    console.log(error)
})
