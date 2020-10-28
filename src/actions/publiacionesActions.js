import {AmenoDorime,TraerPublicacionesPorUsuarios} from '../types/publicacionesTypes';
import  {TraerUsuarios} from '../types/usuariosTypes';


export const getUsuarioPublicaciones =(key)=>async(dispatch, getState)=>{
 try {
    let  { usuarios } = getState().usuariosReducer;
    const { publicaciones } = getState().publicacionesReducer;

    const usuario_id = usuarios[key].id;


    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`)
    const publicacionesUsuarios=await res.json()

    const publicacionesActualizadas=[
    ...publicaciones,
    publicacionesUsuarios
    ];

    const publicaciones_key=publicacionesActualizadas.length-1
    const usuarios_actualizados = [...usuarios];
	usuarios_actualizados[key] = {
		...usuarios[key],
		publicaciones_key
	}
    console.log(`llegamos aca :${publicaciones_key}`);
  

    dispatch({
        type:'TraerUsuarios',
        isLoaded:true,
        payload:usuarios_actualizados


    })
        if (res.status===200 && res.ok===true){
            
            dispatch({
                type:'TraerPublicacionesPorUsuarios',
                isLoaded:true,
                payload:publicacionesActualizadas
            })
    }else {
        dispatch({
            type:'AmenoDorime',
            payload:(`Error:${res.status}`)

        })
    }
     
 } catch (error) {
    dispatch({
        type:'AmenoDorime',
        payload: 'Algo salió mal, intente más tarde'
    })

     
 }
}