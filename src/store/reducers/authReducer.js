const INITIAL_STATE = {
    loginStatus:false,
    errorLogin:''
}



export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS' :
            return {...state, loginStatus:true}
        case 'LOGOUT_SUCCESS' :
            return {...state, loginStatus:false}
        default :
            return state
    }
}