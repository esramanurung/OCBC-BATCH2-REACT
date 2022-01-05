class Participant{
    constructor(name){
        this.name = name
    }
}

// console.log(new Participant('Esra'))
// //console.log(new Participant('Esra').name)

// const esra = new Participant('Esra')
// const ika = new Participant('Ika')

// // console.log({
// //     esra,
// //     ika
// // })

// console.log(`Halo! Nama ${esra.name}`)


// // Tambahin class  (classroom)
// const classroom = {
//     participants:['Pieter', 'Esra', 'David', 'Alwi'],
//     session: 47,
//     name: 'FSD OCBC BATCH 2'
// }
// const {name, participants, session} = classroom
// console.log(`
// Halo ${name}!
// kita masuk ke dalam sesi ${session}.
// Ada berapa peserta: ${participants.join(',')}

// `)


//destructing object from function

// function getClassroom () {
//     return{

//         participants:['Pieter', 'Esra', 'David', 'Alwi'],
//         session: 47,
//         name: 'FSD OCBC BATCH 2'
//     }
   
// }
// const {name, participants, session} = getClassroom()
// console.log(`
// Halo ${name}!
// kita masuk ke dalam sesi ${session}.
// Ada berapa peserta: ${participants.join(',')}

// `)

const [anto, budi] = ['Budi', 'Anto']

console.log(budi,anto)


// // destruct object menjadi property dengan alias
// const { prop: alias } = variable
// prop -> property dari object yang kita destruct
// alias -> alias yang akan kita gunakan sebagai nama variable
