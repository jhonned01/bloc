import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import *as tareasActions from '../../actions/tareasActions'
import Loading from '../Loading/Loading.jsx'
import Fatal from '../Error/Fatal.jsx' 

// const {getTareas}=tareasActions;


 const Tareas = (props) => {
  
    useEffect(() => {
        if (!Object.keys(props.tareasReducer.tareas).length){
            props.getTareas()
        }
        
        
    }, [])

    const mostrarContenido=()=>{
       const {tareas,isLoaded,error}=props.tareasReducer
        if(error){
            return(
                <Fatal mensaje={error}/>
            )
        }
    
        if(!isLoaded){
            return(
                <Loading />
            )
        }

    return Object.keys(tareas).map((usu_id)=>(
        <div key={usu_id}>
            <h2>
                usuario:{usu_id}
            </h2>
            <div className="contenedor_tareas">
                {ponertareas(usu_id)}
            </div>
        </div>
    ))
    

}

    const ponertareas=(usu_id)=>{
        const {tareas}=props.tareasReducer
        const por_usuario ={
            ...tareas[usu_id]
        }

        return Object.keys(por_usuario).map((tar_id)=>(
            <div key={tar_id}>
            <input type="checkbox" defaultChecked={por_usuario[tar_id].completed} />
            
            {
                por_usuario[tar_id].title
                
            }
            </div>
        ))
    }

    return (
        <div>
            <button>
                 <Link to='/tareas/guardar'>
                     Guardar
                 </Link>
            </button>
            {mostrarContenido()} 
        </div>
    )




}
const mapStateToProps = ({tareasReducer}) => ({
    tareasReducer   
})

// const mapDispatchToProps = {
//     getTareas
// }

export default connect(mapStateToProps, tareasActions)(Tareas)
