import logo from './logo.svg';
import './App.css';

//import Header from './components/Header';

import {useEffect, useState} from 'react'
import Counter from './components/Counter';
import Card from './components/card';


function App() { // == stateless component sebelum React 16.8


//*Sesi 21 fetch Data
  const [url] = useState('https://jsonplaceholder.typicode.com/todos')
  const [todos,setTodos] = useState([])
  const [todo, setTodo] = useState()

  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then(result=>setTodos(result))
      

  },[])


  //function untuk mendapatkan data spesifik
 function getTodo(id){
   fetch(url + `/${id}`)
   .then(response => response.json())
   .then(result=>setTodo(result))
 }

  return ( // == render() dari class component
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {todos} */}


        {/* {JSON.stringify(todos)} */}

        {
          // todo && (<div>...</div>)
          // * sama seperti ->> todo ? (<div>...</div>) : null

          // todo || (<div>...</div>)
          // * sama seperti ->> todo ? null : (<div>...</div>) --> ||

          // * -> true && true  -> true
          // * -> true && false -> false

          // ? -> true || true   -> true
          // ? -> true || false  -> true
          // ? -> false || true  -> true
          // ? -> false || false -> false
        }

        {
          todo && (
            <div>
              {todo.title} - {todo.userId} - {todo.completed? 'Completed':'Pending'}
              <button onClick={()=> setTodo()}>Go Back</button>
            </div>
          )
        }

        {
          !todo && todos.map(todo =>(
            // <div key={todo.id}>
          
            //   {/* {JSON.stringify(todos)} */}
            //   <button onClick={()=> getTodo(todo.id)}>
            //   {todo.title} by {todo.userId} - {todo.completed? 'Completed':'Pending'}
            //   </button>
            // </div>
          <Card
            key = {todo.id}
            title = {todo.title}
            userId = {todo.userId}
            completed = {todo.completed}
          />

          ))
        }
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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