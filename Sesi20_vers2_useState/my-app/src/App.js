import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import {useState} from 'react'
import Counter from './components/Counter';



function App() { // == stateless component sebelum React 16.8


  const[name, setName] = useState('Esra')
  const[anotherName, setAnotherName] = useState('Delima')

  function changeName(e){
    const oldName = name
    setName(anotherName)
    setAnotherName(oldName)
  }
  return ( // == render() dari class component
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>
          Edit <code>{name}</code> and save to reload
        </p>
        {/* Tempatkan component Header seperti contoh ini */}
        {/* <Header batch="App" logo={logo}/> */}
        {/* <Header batch= {2} logo={logo}/> */}
        <button onClick={changeName}>change Name</button>
        <Header batch=" 2" logo={logo}/>
        <Counter/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;