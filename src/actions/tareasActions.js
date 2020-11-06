import {TraerTareas,ErrorAction,LoadinTareas,cambio_usuario_id,cambio_titulo,agregada,ACTUALIZAR} from '../types/tareasTypes'

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

export const cambioUsiarioId=(valor)=>(dispatch)=>{
 
    dispatch({
        type:'cambio_usuario_id',
        payload:valor
    })
}

export const cambioTitulo=(titulo)=>(dispatch)=>{

    dispatch({
        type:'cambio_titulo',
        payload:titulo
    })
}

export const agregar =(nueva_tarea)=> async(dispatch)=>{

  
    try {
        dispatch({
            type:'LoadinTareas',
            payload:false
        })

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
                type:'agregada',
               
            })

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

export const editar =(tarea_editada)=>async(dispatch)=>{
    console.log('====================================');
    console.log(tarea_editada);
    console.log('====================================');
    try {
        dispatch({
            type:'LoadinTareas',
            payload:false
        })

       const res=await fetch(`https://jsonplaceholder.typicode.com/todos/${tarea_editada.id}`,{
            method: 'PUT',
            body: JSON.stringify(tarea_editada),
            headers:{
                'Content-Type': 'application/json'
            }
        })

            const respuesta=await res.json()
            console.log(respuesta);
            
            dispatch({
                type:'agregada',
               
            })

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

export const cambioCheck =(usu_id,tar_id)=>(dispatch,getState)=>{
    const {tareas}=getState().tareasReducer
    const seleccionada=tareas[usu_id][tar_id];
    
    const actualizadas={
        ...tareas
    }
    actualizadas[usu_id]={  
        ...tareas[usu_id]
    }
    actualizadas[usu_id][tar_id]={
        ...tareas[usu_id][tar_id],
        completed:!seleccionada.completed
    }
    dispatch({
        type:'ACTUALIZAR',
        payload:actualizadas
    })
}