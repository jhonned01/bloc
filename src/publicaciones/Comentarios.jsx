import React,{useEffect} from 'react'
import { connect } from 'react-redux'

import *as usuariosActions from '../actions/usuariosActions'
import *as publicacionesActions from '../actions/publiacionesActions'

import Loading from '../component/Loading/Loading.jsx'
import Error from '../component/Error/Fatal.jsx'
const {traerTodos:usuariosTraerTodos}=usuariosActions
    
const {
    getUsuarioPublicaciones,
    abrirCerrar,
    traerComentarios
}=publicacionesActions

const Comentarios = (props) => {

   
    const ponerComentarios=()=>(
        
        props.comentarios.map((comentario)=>(
            <li>
                <b>
                    <u>
                        {comentario.email}
                    </u>
                    
                </b>
                <br/>
                {comentario.body}
            </li>
            
        ))
    )

            useEffect(() => {
               
            }, [])
    

    return (

        <ul>
           {ponerComentarios()}
        </ul>
    )
}

const mapStateToProps=({usuariosReducer,publicacionesReducer})=>({
    usuariosReducer,
    publicacionesReducer
})

const mapDispathToProps={
    usuariosTraerTodos,
	getUsuarioPublicaciones,
	abrirCerrar,
	traerComentarios,
}
export default connect(mapStateToProps,mapDispathToProps)(Comentarios);