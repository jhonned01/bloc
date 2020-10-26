import React,{useEffect} from 'react'
import { connect } from 'react-redux'

import *as usuariosActions from '../actions/usuariosActions'
import *as publicacionesActions from '../actions/publiacionesActions'

function Publicaciones(props) {

    useEffect(()=>{
       const acciones= async()=>{
         if (!props.usuariosReducer.usuarios.length) {
            await props.traerTodos()
            console.log('no existian los usuarios');
        }
        if(!props.publicacionesReducer.length){
            await props.getUsuarioPublicaciones(props.match.params.key)
            console.log('no existian publicaciones');
        }
       
    }
    acciones()
    },[])
    
    console.log(props);
    return(
        
    <div>
        <h1>Publicaciones de {props.usuariosReducer.usuarios.name}</h1>
        {props.match.params.key}
        </div>
    )
    
}
const mapStateToProps=({usuariosReducer,publicacionesReducer})=>{
return {
    usuariosReducer,
    publicacionesReducer
}
}

const mapDispatchToProps={
    ...usuariosActions,
    ...publicacionesActions
}

export default connect(mapStateToProps,mapDispatchToProps)(Publicaciones);