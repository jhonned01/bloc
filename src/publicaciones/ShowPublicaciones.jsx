import React from 'react'
import { connect } from 'react-redux'
import *as usuariosActions from '../actions/usuariosActions'
import *as  publicacionesActions from '../actions/publiacionesActions'
import Fatal from '../component/Error/Fatal.jsx'
import Loading from '../component/Loading/Loading.jsx'
import Comentarios from '../publicaciones/Comentarios.jsx'

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const {
	getUsuarioPublicaciones,
	abrirCerrar,
	traerComentarios,
} = publicacionesActions;

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
	   showComments(
		publicaciones[publicaciones_key],
		publicaciones_key
	   )
	   
	   )
   }


    const showComments=(publicaciones,pub_key)=>(

		publicaciones.map((publicacion,com_key)=>(
			<div key={publicacion.id} className="pub_titulo"
			onClick={()=>mostrarComentarios(pub_key, com_key,publicacion.comentarios)}
			>				
			<h2>
				{publicacion.title}
			</h2>
			<h3>
				{publicacion.body}
			</h3>
			{
				(publicacion.abierto)? <Comentarios comentarios={publicacion.comentarios}/> : ''
			}
			</div>
	  	 ))
	)


	const mostrarComentarios =(pub_key, com_key,comentarios)=>{
		console.log('====================================');
		console.log('comentarios');
		console.log('====================================');
		props.abrirCerrar(pub_key, com_key);
		if (!comentarios.length) {
			props.traerComentarios(pub_key, com_key)
		}
		
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
	usuariosTraerTodos,
	getUsuarioPublicaciones,
	abrirCerrar,
	traerComentarios,
	
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPublicaciones)
