// {
//     let participant = "Alwi"
//     var racer = "Budi"
// }

// //console.log(participant)
// console.log(racer)


//-->  penggunaan const
// function Button(){
    
//     const name = 'Submit'  //const[ant]

//     function changeName(){ //handler
//         name = 'Send'
        
//     changeName()

//     console.log(name)
   
//     return 'done'
// }

//Button()

// Penggunaan Let
// function Button(){
//     let value = 1
   

//     function changeName(){ //handler
        
//         value = 100
//     }
//     changeName()

    
//     console.log(value)

//     return 'done'
// }

// Button()
//--------------->
// {
//     let participant = "Esra"
//     var racer = "Kevin"
// }

// //console.log(participant);
// console.log(racer);


//------------------>>>
function Button() {
    let value = 1
    const name = "Submit"

    { 
        value = 100
        var type = 'submit'
    }

    //changeName()
    console.log(type);

    return 'done'
}

Button()



//------------------>>>
function Button() {
    let value = 1
    const name = "Submit"

    // { 
    //     value = 100
    //     var type = 'submit'
    // }

    // //changeName()
    // console.log(type);

    return `${name} - ${value}`
}

console.log(Button())

