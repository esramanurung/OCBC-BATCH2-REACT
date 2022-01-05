import { useEffect, useState } from "react";

function  Counter() {
    const[counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log('efek berjalannnnn/di-trigger di commponent')

    })

    return(
        <div>
            <h2>Let's Count</h2>
            <h3>{counter}</h3>


            <button
                onClick={()=> setCounter(counter + 1)}
                style={{fontSize:'2em'}}
                >
                    Hit Me!
            </button>
        </div>
    )

    
}

export default Counter