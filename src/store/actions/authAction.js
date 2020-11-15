import Axios from 'axios'
const baseUrlServer = 'http://localhost:5000'



export const loginAction =(username, password)=>{
    return dispatch=>{
        console.log(username,password)
        Axios.post(baseUrlServer + "/user/login", {
        username,
        password,
        })
        .then(({data})=>{
            dispatch({type:'LOGIN_SUCCESS'})
            localStorage.setItem('access_token', data.access_token)
            // return <Redirect to={'/'}/>
        })
        .catch(err=>{
            console.log(err)
        })
    }
}


export  const keepLoginAction=()=>{
    return dispatch =>{
        dispatch({type:'LOGIN_SUCCESS'})
    }
}

export const logoutAction=()=>{
    return dispatch =>{
        console.log('masuk')
        dispatch({type:'LOGOUT_SUCCESS'})
        localStorage.removeItem('access_token')
    }
}