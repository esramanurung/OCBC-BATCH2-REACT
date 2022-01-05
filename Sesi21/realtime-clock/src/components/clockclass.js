import React, {Component} from "react";

class ClockClass extends Component {

    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render(){
        return(
            <div className="App">
                <h1>Realtime CLOCK</h1>
                <hr/>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
           
        )
    }
    
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    } 

}

export default  ClockClass