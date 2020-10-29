import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import Loading from '../component/Loading/Loading.jsx'
import Fatal from '../component/Error/Fatal.jsx'
import ShowPublicaciones from './ShowPublicaciones.jsx'

import *as usuariosActions from '../actions/usuariosActions'
import *as publicacionesActions from '../actions/publiacionesActions'

function Publicaciones(props) {

    const acciones= async()=>{
        if (!props.usuariosReducer.usuarios.length) {
           await props.traerTodos()
     
           console.log(`no existian los usuarios:`);
       }
    
     console.log(`estado de publiaciones reducer ${props.publicacionesReducer.publicaciones.length}`);

       if(!props.publicacionesReducer.publicaciones.length){
       await props.getUsuarioPublicaciones(props.match.params.key)
       
    }else if (!('publicaciones_key' in props.usuariosReducer.usuarios[props.match.params.key])){
       
        await props.getUsuarioPublicaciones(props.match.params.key)
        console.log('no existian publicaciones');
    
    
        
        }
      
   }    
    useEffect(()=>{
        
    acciones()
   
    },[])
   
    console.log(props);

   
  
    if (props.usuariosReducer.error) {
        return(
        <Fatal mensaje={props.usuariosReducer.error}/>
        )
        
    }else if (!props.usuariosReducer.isLoaded) {
        return(        
            <Loading/>       
        )
    }
    else if(!props.usuariosReducer.error && props.usuariosReducer.isLoaded && props.usuariosReducer.usuarios.length>1){
        return(
         <div>
             
             <ShowPublicaciones prueba_key={props.match.params.key}/>
         </div>
        )
    
    }
    
   
    
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