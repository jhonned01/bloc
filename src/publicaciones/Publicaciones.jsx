import React from 'react'

function Publicaciones(props) {
    return(
    <div>{props.match.params.key}</div>
    )
    
}

export default Publicaciones;