import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import '../App.css'
import * as usuariosActions from '../../actions/usuariosActions'

const Usuarios=(props)=>{
   
 
    
    
    useEffect(()=>{
    
        props.traerTodos()
    },[])
    // console.log(usuarios);

    
    console.log(`esto es un props:${props.error}`);
    
    if (props.error) {
        return(
        <div>Error:{props.error.message}</div>
        )
        
    }else if (props.isLoaded) {
        return(
            <div>Loading ...</div>
        )
    }
    else{
     return (
          
            <div className="margin">
                  {/* <button onClick={()=>DataConection()}>Load More</button> */}
                <table className="table">
                    <thead className="">
                        <tr>
                            <th>nombre</th>
                            <th>correo</th>
                            <th>Enlace</th>
                        </tr>
                    </thead>
                    <tbody>
                       
    
                            {
                            props.usuarios.map(item => (
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
                                </tr>
                            ))}
                            
                            
                        
                    </tbody>
                </table>
            </div>
            
          );
    
        }
     }

const mapStateToProps=(reducers)=>{
return reducers.usuariosReducer;
}

export default connect(mapStateToProps,usuariosActions)(Usuarios);