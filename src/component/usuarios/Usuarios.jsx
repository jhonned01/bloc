import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import '../App.css'
import * as usuariosActions from '../../actions/usuariosActions'
import Loading from '../Loading/Loading.jsx'
import Fatal from '../../component/Error/Fatal.jsx'
import TableUsuarios from './TableUsuario.jsx'

const Usuarios=(props)=>{
   
   

    const validacionUsuarios=async()=>{
        if (!props.usuarios.length) {
            await props.traerTodos()
            console.log('no existian los usuarios');
        }

    }
  
    
    useEffect(()=>{
        validacionUsuarios()
        // ejecutarTraerUsuarios()
        
                 
        
    },[])
    console.log(`Estado del Loading:${props.isLoaded}`);
    // console.log(usuarios);
    console.log(`cantidad de usuarios:${props.usuarios.length}`);

    
 
    
    if (props.error) {
        return(
        <Fatal mensaje={props.error}/>
        )
        
    }else if (!props.isLoaded) {
        return(
        
            <Loading/>
        
        )
    }
    else if(!props.error && props.isLoaded && props.usuarios.length>1){
     return (
          <TableUsuarios />
            
            
          );
    
        }
    }

const mapStateToProps=(reducers)=>{
return reducers.usuariosReducer;
}

export default connect(mapStateToProps,usuariosActions)(Usuarios);