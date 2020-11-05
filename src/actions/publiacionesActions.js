import {AmenoDorime,TraerPublicacionesPorUsuarios,comIsLoaded,comError} from '../types/publicacionesTypes';
import  {TraerUsuarios} from '../types/usuariosTypes';


export const getUsuarioPublicaciones =(key)=>async(dispatch, getState)=>{
 try {
    let  { usuarios } = getState().usuariosReducer;
    const { publicaciones } = getState().publicacionesReducer;

    const usuario_id = usuarios[key].id;


    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`)
    const publicacionesUsuarios=await res.json()

    const nuevas=publicacionesUsuarios.map((publicacion)=>({
        ...publicacion,
        comentarios:[],
        abierto:false

    }))

    const publicacionesActualizadas=[
    ...publicaciones,
        nuevas
    ];
    if (res.status===200 && res.ok===true){
    dispatch({
        type:'TraerPublicacionesPorUsuarios',
        isLoaded:true,
        payload:publicacionesActualizadas
    })

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
  
    }else {
        dispatch({
            type:'AmenoDorime',
            payload:(`Informacion de Publicaciones no disponible:${res.status}`)

        })
    }
     
 } catch (error) {
    dispatch({
        type:'AmenoDorime',
        payload: 'Algo salió mal, intente más tarde'
    })
 }
}


export const abrirCerrar =(pub_key, com_key)=>(dispatch,getState)=>{
const { publicaciones } = getState().publicacionesReducer
const seleccionada = publicaciones[pub_key][com_key]

const actualziada ={
    ...seleccionada,
    abierto: !seleccionada.abierto
    }

const publicaciones_actualizadas=[...publicaciones]
    publicaciones_actualizadas[pub_key]=[
        ...publicaciones[pub_key]
    ]

    publicaciones_actualizadas[pub_key][com_key]=actualziada

    dispatch({
        type:'TraerPublicacionesPorUsuarios',
        isLoaded:true,
        payload:publicaciones_actualizadas
    })

}


export const traerComentarios=(pub_key,com_key)=>async(dispatch,getState)=>{
    
 
    try {
        dispatch({
            type:'comIsLoaded',         
            payload:false
        })
        const {publicaciones}=getState().publicacionesReducer;
        const seleccionada =publicaciones[pub_key][com_key]
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${seleccionada.id}`)
        if (res.status===200 && res.ok===true){

        const comentariosData=await res.json()      
        const actualziada={
            ...seleccionada,
            comentarios:comentariosData
        }

        const publicaciones_actualizadas=[...publicaciones]
        publicaciones_actualizadas[pub_key]=[
            ...publicaciones[pub_key]
        ]

        publicaciones_actualizadas[pub_key][com_key]= actualziada
        dispatch({
            type:'TraerPublicacionesPorUsuarios',
            isLoaded:true,
            payload:publicaciones_actualizadas
        })
       
        dispatch({
            type:'comIsLoaded',         
            payload:true
        })

    }else{
        dispatch({
            type:'comIsLoaded',         
            payload:true
        })
        dispatch({
            type:'comError',
            payload:(`Informacion del Comentario no disponible:${res.status}`)

        })

    }
    } catch (error) {
        dispatch({
            type:'AmenoDorime',
            payload: 'Algo salió mal, intente más tarde'
        })
        
    }
}

