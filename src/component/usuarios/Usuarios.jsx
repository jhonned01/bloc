import React,{useState,useEffect} from 'react'
import '../App.css'

const Usuarios=()=>{
    const [usuarios,setUsuario]=useState([])
    const [error,setError]=useState(false)
    const [isLoaded,setIsLoaded]=useState(true)
    
   async function DataConection(event) {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(
        (result)=> {
            setUsuario(result)
            setIsLoaded(false)
        },
        (err)=>{
            setIsLoaded(false)
            setError(err)
        }
    )
    
    }
    
    useEffect(()=>{
        DataConection()
    },[])
    console.log(usuarios);

    

    if (error) {
        return(
        <div>Error:{error.message}</div>
        )
    }else if (isLoaded) {
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
                            usuarios.map(item => (
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

export default Usuarios;