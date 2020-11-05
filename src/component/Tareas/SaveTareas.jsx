import React from 'react'
import { connect } from 'react-redux'
import *as tareasActions from '../../actions/tareasActions'
import Loading from '../Loading/Loading.jsx'
import Fatal from '../Error/Fatal.jsx'

 const SaveTareas = (props) => {
    // const {cambioUsiarioId,cambioTitulo}=tareasActions
    
   
  
    const cambioUsiarioId=(event)=>{
        props.cambioUsiarioId(event.target.value)
    }

    const cambioTitulo=(event)=>{
        props.cambioTitulo(event.target.value)
    }
   const btn_save =()=>{
      
       const {usuario_id, titulo}=props.tareasReducer
    
       const nueva_tarea = {
        userId: usuario_id,
        title: titulo,
        completed: false
    };
     
    props.agregar(nueva_tarea)
   }

   const deshabilitar=()=>{
    const {titulo,usuario_id,isLoaded}=props.tareasReducer
    if(!isLoaded){
        return true

    }
    if(!usuario_id|| !titulo ){
    return true
    }
    return false
}
// console.log('====================================');
// console.log(`xd;${props.tareasReducer.tutulo}`);
// console.log('====================================');

//  const mostrarAccion=()=>{
//     const {error,isLoaded}=props.tareasReducer
//     if (error){
//         return(
//             <Fatal mensaje={error}/>
//         )
//     }
    
//     if (!isLoaded) {
//         return (
//             <Loading/>
//         )
//     }
    
// }

    return (
        <div>
            <h1>Guardar Tarea</h1>
            usuario id:
            <input type="number" value={props.tareasReducer.usuario_is} name="" 
            onChange={cambioUsiarioId}/>
            <br/> <br/>
            Titulo:
            <input type="text" value={props.tareasReducer.titulo} name="" 
            onChange={cambioTitulo}/>
            <br/> <br/>
            <button
            
            disabled={ deshabilitar() }
            onClick={ btn_save }
            >
            Guardar
            </button>
            {/* {mostrarAccion()} */}
           
        </div>
    )
}

const mapStateToProps = ({tareasReducer}) => ({
    tareasReducer,
})



export default connect(mapStateToProps,tareasActions)(SaveTareas)
