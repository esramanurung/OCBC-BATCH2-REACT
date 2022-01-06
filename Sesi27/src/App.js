import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Why do we need test
          </p>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            {/* optional: */}
            <Redirect path="/**" to="/" />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
