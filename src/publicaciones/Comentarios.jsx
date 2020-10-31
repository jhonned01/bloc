import React from 'react'
import { connect } from 'react-redux'

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

    

    return (

        <ul>
           {ponerComentarios()}
        </ul>
    )
}
export default Comentarios;