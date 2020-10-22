import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import '../App.css'
import * as usuariosActions from '../../actions/usuariosActions'
import Loading from '../Loading/Loading.jsx'
import Fatal from '../../component/Error/Fatal.jsx'
import TableUsuarios from './TableUsuario.jsx'

const Usuarios=(props)=>{
   
    const ejecutarTraerUsuarios=()=>props.traerTodos()
    
    useEffect(()=>{
    
        // props.traerTodos()
        ejecutarTraerUsuarios()
    },[])
    // console.log(usuarios);
    console.log(`cantidad de usuarios:${props.usuarios.length}`);

    
    console.log(`esto es un props de error:${props.error}`);
    
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