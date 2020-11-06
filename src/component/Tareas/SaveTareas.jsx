import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import *as tareasActions from '../../actions/tareasActions'
import Loading from '../Loading/Loading.jsx'
import Fatal from '../Error/Fatal.jsx'
import {Redirect} from 'react-router-dom'

 const SaveTareas = (props) => {
    // const {cambioUsiarioId,cambioTitulo}=tareasActions
    useEffect(() => {
        
        validacion()
        EditarTarea()
  
    
}, [])

    function validacion() {
        if(!Object.keys(props.tareasReducer.tareas).length){
            props.getTareas()
        }
    }


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
    const {usu_id,tar_id}=props.match.params
    
    if(usu_id && tar_id){
        const tarea = props.tareasReducer.tareas[usu_id][tar_id];
     const tareaEditada={
         ...nueva_tarea,
         completed:tarea.completed,
         id:tarea.id
     }
        props.editar(tareaEditada)
        }else{
            props.agregar(nueva_tarea)
        }
   
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

 const mostrarAccion=()=>{
    const {error,isLoaded}=props.tareasReducer
    if (error){
        return(
            <Fatal mensaje={error}/>
        )
    }
    
    if (!isLoaded) {
        return (
            <Loading/>
        )
    }
    
}
console.log('====================================');
console.log(props.tareasReducer.regresar);
console.log('====================================');

function EditarTarea() {
    const {usu_id,tar_id}=props.match.params
    
    if(usu_id && tar_id){
        
        const tarea = props.tareasReducer.tareas[usu_id][tar_id];
       
       
        
        props.cambioUsiarioId(tarea.userId);
        props.cambioTitulo(tarea.title);
    }
}

    return (
        <div>
            {
                (props.tareasReducer.regresar)?
                <Redirect to='/tareas/'/>:
                ''

            }
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
            {mostrarAccion()}
           
        </div>
    )
}

const mapStateToProps = ({tareasReducer}) => ({
    tareasReducer,
})



export default connect(mapStateToProps,tareasActions)(SaveTareas)
