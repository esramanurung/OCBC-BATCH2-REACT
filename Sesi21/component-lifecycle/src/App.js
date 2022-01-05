import logo from './logo.svg';
import './App.css';

//import Header from './components/Header';

import {useEffect, useState} from 'react'
import Counter from './components/Counter';


function App() { // == stateless component sebelum React 16.8


  // const[name, setName] = useState('Esra')
  // const[anotherName, setAnotherName] = useState('Delima')


//*Sesi 21 fetch Data
  const [url] = useState('https://jsonplaceholder.typicode.com/todos')
  const [todos,setTodos] = useState([])
  const [todo, setTodo] = useState()


  // function changeName(e){
  //   const oldName = name
  //   setName(anotherName)
  //   setAnotherName(oldName)
  // }



  // Fetch data
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(result=>setTodos(result))

  // },[])

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
            <div key={todo.id}>
          
              {/* {JSON.stringify(todos)} */}
              <button onClick={()=> getTodo(todo.id)}>
              {todo.title} by {todo.userId} - {todo.completed? 'Completed':'Pending'}
              </button>
            </div>

          ))
        }
       
        {/* <button onClick={changeName}>change Name</button> */}
        
        {/* <Header batch=" 2" logo={logo}/> */}
        <Counter/>
      </header>
    </div>
  );
}

export default App;
