import {TraerUsuarios,AmenoDorime} from '../types/usuariosTypes.js'

export const traerTodos=()=> async(dispatch)=> {
    
   try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    
    // console.log(`est es un status${res.status} ${res.ok}`);
          if (res.status === 200 && res.ok===true ) {
            const  data = await res.json()
            dispatch({
                type:'TraerUsuarios',
                isLoaded:true,
                payload:data
                
            })
              
          } else {
              dispatch({
                  type:'AmenoDorime',
                  payload:(`Informacion de usuarios no disponible:${res.status}`)

              })
          }
          
   } catch (error) {
  
       console.log('ejecutamos error');
        dispatch({
            type:'AmenoDorime',
            payload: 'Algo salió mal, intente más tarde'
        })
       
   }
 
}

