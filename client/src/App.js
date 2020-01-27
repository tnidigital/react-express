import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Home from './components/Home'
import Register from './components/register'
import Login from './components/login'


function App() {
  return (
     <Router>
       <div>
         <nav>
           <ul>
             <li>
               <NavLink exact to="/"></NavLink>
             </li>
           </ul>
         </nav>

         <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/register" component={Register}/>
           <Route exact path="/login" component={Login}/>
         </Switch>
       </div>
     </Router>
  );
}

export default App;
