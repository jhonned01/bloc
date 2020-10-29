import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import *as usuariosActions from '../actions/publiacionesActions'
import *as  publicacionesActions from '../actions/usuariosActions'
import Fatal from '../component/Error/Fatal.jsx'
import Loading from '../component/Loading/Loading.jsx'



const ShowPublicaciones = (props) => {
    
    



    const actions= ()=>{
       const  {
		usuariosReducer,
		usuariosReducer:{usuarios},
		publicacionesReducer,
		publicacionesReducer:{publicaciones}

	   }=props
	   
	   if (!usuarios.length) return;

	   if(usuariosReducer.error) return;


	   if (!usuariosReducer.isLoaded) return;


	   if (!publicaciones.length) return;

	   if(!publicacionesReducer.isLoaded) return <Loading/>;

	   if(publicacionesReducer.error) return <Fatal mensaje={props.error}/>

	   if(!('publicaciones_key' in usuarios[props.prueba_key])) return


	   const {publicaciones_key}= usuarios[props.prueba_key]

	   return(
	   
	   publicaciones[publicaciones_key].map((publicacion)=>(
			<div key={publicacion.id} onClick={()=>alert(publicacion.id)} className="Publicaciones">				
			<h2>
				{publicacion.title}
			</h2>
			<h3>
				{publicacion.body}
			</h3>
			</div>
	  	 ))
	   )
   }
  
     
    
    return(
        <div >
            {
               actions() 
            }
            
        </div>
    )
    
}


const mapStateToProps = ({usuariosReducer,publicacionesReducer}) => ({
    usuariosReducer,
    publicacionesReducer
})

const mapDispatchToProps = {
    ...usuariosActions,
    ...publicacionesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPublicaciones)
