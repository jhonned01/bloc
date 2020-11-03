import {TraerTareas,ErrorAction,LoadinTareas} from '../types/tareasTypes'

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