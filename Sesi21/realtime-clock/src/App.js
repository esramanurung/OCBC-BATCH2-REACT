//import React, {useState} from 'react';
import React from 'react';
import './App.css';
import Clock from './components/clock';
import ClockClass from './components/clockclass';

// class App extends React.Component{
//    render(){
//      return(
//       <div className="App">
//         <h1>Realtime CLOCK</h1>
//         <hr/>     
//       </div>

//      );
//    }
//  }

function App() {
  return (
    <div className="App">
      <h1>Study Case : Realtime CLOCK</h1>
      <br/>
      <hr/>
      <ClockClass/>
      <hr/>
      <Clock/>
    </div>
  );
}

export default App;

