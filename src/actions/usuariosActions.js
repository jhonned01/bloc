

export const traerTodos=()=> async(dispatch)=> {
    
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(
        (result)=> {
            // setUsuario(result)
            // setIsLoaded(false)
            dispatch({
                type:'traer_usuarios',
                payload:result,
                isLoaded:false,
                error:null
                
            })
          
        },
        (error)=>{
            // setIsLoaded(false)
            // setError(err)
            dispatch({
                type:'traer_usuarios',
                error:error
            })
        }
    )
    
   
    
}

