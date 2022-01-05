import { useEffect, useState } from "react";


function Counter (){
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        //componentdidmount()
        console.log('Berjalan satu kali')
    }
    //untuk menjalankan satu kali
    //shouldcomponentupdate()-> false (jika[])
    ,[]
    )
    useEffect(() => {
        //component diupdate
        if(counter>0)console.log('State counter berubah')
    }
    //should componentupdate()
    ,[counter]
    )
    
    // useEffect(() => {
    //     window.addEventListener('blur', ()=>{
    //         console.log('Effect blur')
    //     })
    //     /* return ()=> {
    //         window.removeEventListener('blur')
    //     } */
    // })
    

    return (
        <div>
            <h2>Let's count</h2>
            <h3>{counter}</h3>
            {/* BONUS: in-line styling */}
            <button 
                onClick={()=> setCounter(counter + 1)}
                //style="font-size: 2em"
                style={{fontSize: '2em'}}
                >
                Hit me!
            </button>
        </div>
    )
}

export default Counter