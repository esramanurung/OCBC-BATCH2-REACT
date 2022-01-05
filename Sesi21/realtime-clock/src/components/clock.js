import React, {useState, useEffect} from 'react'


function Clock() {

    const [date, setDate] = useState(new Date())

    function tick () {
        setDate(new Date())
    }

    useEffect(() => {
        const interval = setInterval(() => {tick()}, 1000)
        return function(){
            clearInterval(interval)
        }
    }, [])
         
    return(
        <div className="App">
            <h1>Realtime CLOCK Using Function Component</h1>
            <hr/>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
       
    );      
}
export default Clock