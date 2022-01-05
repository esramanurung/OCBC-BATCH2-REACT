import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Header(){
  return(
    <header className="header">
      <h1>My First React App</h1>
      <h2><img src={logo} className="App-logo" alt="logo" /></h2>
    </header>
  )

}

function Content(){
  return(
    <div className="content">
      <p>
      The future depends on what you do today!
      <br>
      </br>
      Great man are not born great, they grow great
      </p>
    </div>
  )

}

function Footer(){
  return(
    <div className="footer">
      <p>&copy;Myself - 2022</p>
    </div>
  )

}

function App() {
  const [Name, setName] = useState("Budi")

  function changeName () {
    return (
      setName("Esra")
    )
  }
  
  return (
    // <div className="container">
    //   <Header/>
    //   <hr/>
    //   <Content/>
    //   <hr/>
    //   <Footer/>
    // </div>
    <div className="App">
    <Header />
      <hr></hr>
      <Content/>
      <hr></hr>
      <Footer/>
      <hr></hr>
      <p>
        Hallo {Name}
      </p>
      <button onClick={changeName}> Change my Name! </button>
    </div>
  );
}

export default App;
