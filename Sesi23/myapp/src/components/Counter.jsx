import { useEffect, useState } from "react";

function Counter() {
    const[ counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('Efek berjalan di component Counter');
    }, [])

    useEffect(() => {
        if(counter > 0) {
        console.log('State Berubah');
        }
    })

    return (
        <div>
            <h2>Let's count!</h2>
            <h3> {counter}</h3>

            <button 
            onClick={()=> setCounter(counter+1)}
            style={{fontSize: '2em'}}

            >Click Me!</button>
        </div>
    )    
    
}

export default Counter