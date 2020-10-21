const INITIAL_STATE={
    usuarios:[],
    isLoaded:true,
    error:null
}

export default (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'traer_usuarios':
            return{...state, usuarios: action.payload, isLoaded: action.isLoaded,error: action.error}
           
        default:
            return state;
       
}}