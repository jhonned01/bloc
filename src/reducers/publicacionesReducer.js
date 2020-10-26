import {TraerPublicacionesPorUsuarios,AmenoDorime} from '../types/publicacionesTypes'
const INITIAL_STATE={
    publicaciones:[],
    isLoaded:false,
    error:null
}

export default(state=INITIAL_STATE,action)=>{
switch (action.type) {
    case 'TraerPublicacionesPorUsuarios':
        return{...state,
            publicaciones:action.payload,
            isLoaded:action.isLoaded
            
            }
        
    case 'AmenoDorime':
        return{...state,
            error:action.payload}
    default:
        return state;
}
}