import {TraerTareas,ErrorAction,LoadinTareas,cambio_usuario_id,cambio_titulo,agregada,ACTUALIZAR} from '../types/tareasTypes'

const INITIAL_STATE={
    tareas:{},
    isLoaded:false,
    error:null,
    usuario_id:null,
    titulo:'',
    regresar: false,
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'TraerTareas':
            return{...state,
            tareas:action.payload,
            regresar:false           
        }
        case 'LoadinTareas':
            return{...state,
                isLoaded:action.payload
            }
        
    
        case 'ErrorAction':
            return{...state,
                error:action.payload
            }  
        case 'cambio_usuario_id':
            return{...state,
                usuario_id:action.payload
               
            }
        case 'cambio_titulo':
            return{...state,
                titulo:action.payload
               
            }
            case 'agregada':
            return{...state,
                tareas: {},
				isLoaded: false,
				error: '',
				regresar: true,
				usuario_id: '',
				titulo: ''
               
            }
            case 'ACTUALIZAR':
                return{...state,
                tareas:action.payload                                                                                   
                }
      
        default:
            return state;
            
    }
}