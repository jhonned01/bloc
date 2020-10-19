import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Usuarios from './usuarios/Usuarios.jsx'
// import Tareas from './usuarios/Tareas.jsx'
import './App.css'
import Menu from './Menu.jsx'

const Tareas=()=>{
    return(
        <div>
            <p>Estas son las tareas</p>
        </div>
    )
}

const App =()=>{
return(
        <BrowserRouter>
            <Menu/>
            <div className="margin"> 
                <Route exact path='/' component={Usuarios} />
                <Route exact path='/tareas' component={Tareas}/>
            </div>
          </BrowserRouter>
)
}

export default App;
