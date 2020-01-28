import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Register from './register'
import Login from './login'



function Home() {
    return (
       <Router>
         <div>
           <h1>welcome to react</h1>
           <nav>
             <ul>
               <li>
                 <NavLink exact to="/register">register</NavLink>
               </li>
               <li>
                   <NavLink exact to="/login">login</NavLink>
               </li>
             </ul>
           </nav>
  
           <Switch>
             <Route exact path="/register" component={Register}/>
             <Route exact path="/login" component={Login}/>
           </Switch>
         </div>
       </Router>
    );
  }
  
  export default Home;
  

