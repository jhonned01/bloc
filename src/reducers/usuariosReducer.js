import {TraerUsuarios,AmenoDorime} from '../types/usuariosTypes'

const INITIAL_STATE={
    usuarios:[],
    isLoaded:false,
    error:null
}

export default (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'TraerUsuarios':
            return{...state, 
            usuarios: action.payload, 
            isLoaded: action.isLoaded,
            error: action.error}
           
        case 'AmenoDorime':
           
			return { ...state, error: action.payload};
        default:
            return state;
       
}}