import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Usuarios from './usuarios/Usuarios.jsx'
// import Tareas from './usuarios/Tareas.jsx'
import './App.css'
import Menu from './Menu.jsx'
import Publicaciones from '../publicaciones/Publicaciones.jsx'
import Tareas from './Tareas/Tareas.jsx'
import GuardarTareas from './Tareas/SaveTareas.jsx'



const App =()=>{
return(
        <BrowserRouter>
            <Menu/>
            <div className="margin"> 
                <Route exact path='/' component={Usuarios} />
                <Route exact path='/tareas' component={Tareas}/>
                <Route exact path='/publicaciones/:key' component={Publicaciones}/>
                <Route exact path='/tareas/guardar' component={GuardarTareas} /> 
            </div>
          </BrowserRouter>
)
}

export default App;
