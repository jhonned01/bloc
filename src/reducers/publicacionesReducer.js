import {TraerPublicacionesPorUsuarios,AmenoDorime,comIsLoaded,comError} from '../types/publicacionesTypes'
const INITIAL_STATE={
    publicaciones:[],
    isLoaded:false,
    error:null,
    comIsLoaded:false,
    comError:null
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

    case 'comIsLoaded':
        
        return{...state,
        comIsLoaded:action.payload
        }
        
    case 'comError':
    return{...state,
        comError:action.payload
    
    }



    default:
        return state;
}
}