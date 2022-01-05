import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';

import Card from './components/Card';
import Counter from './pages/Counter';
import logo from './logo.svg';
import States from './pages/States';
import Todos from './pages/Todos';

function App() {

  // // * function untuk mendapatkan data spesifik
  // function getTodo(id) {
  //   fetch(url + `/${id}`)
  //     .then(response => response.json())
  //     .then(result => setTodo(result))
  // }

  return ( // == render() dari class component
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        {/* //Tambahkan Header */}
        <ul>
          <li>
            <NavLink exact to="/">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/states">States</NavLink>
          </li>
          <li>
            <NavLink to="/states/Esra">States with Esra</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
        </ul>
           
      </header>
      
      <Switch>
        <Route path="/" exact>

          <Counter />

        </Route>

        <Route path="/states" exact>
          <States/>
        </Route>

        <Route path="/states/:name">
          <States/>
        </Route>

        <Route path="/todos">
          <Todos/>
        </Route>

      </Switch> 
     
  </div>
  </Router>
  );
}

export default App;
