import {TraerTareas,ErrorAction,LoadinTareas,cambio_usuario_id,cambio_titulo} from '../types/tareasTypes'

export const getTareas =()=>async(dispatch)=>{

    try {      
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        console.log(`est es un status${res.status} ${res.ok}`);
        if (res.status===200 && res.ok===true){
            
        const tareas = await res.json()
       
        const data ={}
        tareas.map((task)=>(
            data[task.userId]= {
                ...data[task.userId],
                [task.id]:{
                    ...task
                }
            }
        ))
        
        dispatch({
            type:'TraerTareas',
            payload: data
        });

        dispatch({
            type:'LoadinTareas',
            payload:true
        })
    }
    // else{
    //    console.log('puta madre');
    //     dispatch({
    //         type:'ErrorAction',
    //         payload:`Informacion de tareas no disponible:${res.status}`
    //     })       
    // }

    } catch (error) {
        dispatch({
            type:'ErrorAction',
            payload:`informacion de Tareas no disponible: ${error}`
        })  
    }
}

export const cambioUsiarioId=(usuario_id)=>(dispatch)=>{
    dispatch({
        type:'cambio_usuario_id',
        payload:usuario_id
    })
}

export const cambioTitulo=(titulo)=>(dispatch)=>{
    console.log('====================================');
    console.log(titulo);
    console.log('====================================');
    dispatch({
        type:'cambio_titulo',
        payload:titulo
    })
}

export const agregar =(nueva_tarea)=> async(dispatch)=>{

  
    try {
       const res=await fetch('https://jsonplaceholder.typicode.com/todos',{
            method: 'POST',
            body: JSON.stringify(nueva_tarea),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        
            const respuesta=await res.json()
            console.log(respuesta);
            
        

        dispatch({
            type:'LoadinTareas',
            payload:true
        })
        
        
    } catch (error) {
        dispatch({
            type:'ErrorAction',
            payload:`informacion de Tareas no disponible: ${error}`
        })  
        
    }

}