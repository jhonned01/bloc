import React,{} from 'react'
import { connect } from 'react-redux'
import *as usuariosActions from '../actions/publiacionesActions'
import *as  publicacionesActions from '../actions/usuariosActions'



const ShowPublicaciones = (props) => {
    
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
