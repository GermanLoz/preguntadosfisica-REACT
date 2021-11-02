import React,{useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Inicio from './inicio.jsx'
import User from './user.jsx'
import UserContext from './contex.jsx'
import Formulario from './components/formulario.jsx'

function App() {
  const[user,setUser] = useState(' ')

  const jugador = {
    name:user,
    puntaje:" ",
}

  return (
  <UserContext.Provider value={jugador}>  
    <div>
      <Router>
         <Switch>
           {user.length <= 3 ?
         <Formulario setUser={setUser}/>
           : " "}            
          <Route path ="/questions" component={Inicio}></Route>
          <Route path ="/result" component={User}></Route>
         </Switch>
       </Router>
    </div>
  </UserContext.Provider>
  );
}

export default App;
