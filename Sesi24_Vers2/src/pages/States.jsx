import { useState } from 'react';
import { Route, Switch, useHistory, useParams,useRouteMatch } from 'react-router-dom';
import NameChange from './states/NameChange';


function States () {
  // == stateless component sebelum React 16.8
  //const [ state, setState ] = useState(initialValue)
  //const props = useParams()
  const history = useHistory()
  const {url,path} = useRouteMatch()
  const [  name,  setName ] = useState()
  //const [  name,  setName ] = useState(props.name ||     'Budi')
  // const [ anotherName, setAnotherName ] = useState('Fikri')

  
  function showNameChange(){
    history.push(`${path}/${name}`)
  }

  // function changeName (e) {
  //   // cara 1: useState tambahan
  //   const oldName = name
  //   setName(anotherName)
  //   setAnotherName(oldName)

    // cara 2: conditional
    // setName(name === 'Budi' ? 'Fikri' : 'Budi')
  //}

  return (
  <>
    {/* <p>
      Edit <code>{ name }</code> and save to reload.
    </p>
    <button onClick={changeName}>Change name</button> */}
    <h2>Enter Name:</h2>
    <input name="personName" onChange={(e)=> setName(e.target.value)}/>
    <button onClick={showNameChange}>Show me</button>

    <Switch>
        <Route path={`${path}/:name`}>
          <NameChange />
        </Route>
      </Switch>
  </>
  )
}

export default States
