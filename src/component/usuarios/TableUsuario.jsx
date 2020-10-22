import React from 'react'
import '../App.css'
import {connect} from 'react-redux'

import * as usuariosActions from '../../actions/usuariosActions'

const TableUsuario=(props)=>{
    return(
        <div className="margin">
                  {/* <button onClick={()=>DataConection()}>Load More</button> */}
                  <h1>Usuarios</h1>
                <table className="table">
                    <thead className="">
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Enlace</th>
                        </tr>
                    </thead>
                    <tbody>
                       
    
                            {
                            props.usuarios.map((item, key) => (
                                 <tr key={item.id}>
                                    <td >
                                        {item.name}  
                                    </td>
                                    <td>
                                         {item.email}
                                
                                    </td>
                                     <td>
                                        {item.website}
                                
                                    </td>
                                    {/* <td>
                                        {   }
                                
                                    </td> */}
                                </tr>
                            ))}
                            
                            
                        
                    </tbody>
                </table>
            </div>
    )
}

const mapStateToProps=(reducers)=>{
    return reducers.usuariosReducer;
    
}


export default connect(mapStateToProps,usuariosActions)(TableUsuario);