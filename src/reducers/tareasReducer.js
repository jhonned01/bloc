import {TraerTareas,ErrorAction,LoadinTareas} from '../types/tareasTypes'

const INITIAL_STATE={
    tareas:{},
    isLoaded:false,
    error:null
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'TraerTareas':
            return{...state,
            tareas:action.payload
                            
        }
        case 'LoadinTareas':
            return{...state,
                isLoaded:action.payload}
        
    
        case 'ErrorAction':
            return{...state,
                error:action.payload

            }  

      
        default:
            return state;
            
    }
}