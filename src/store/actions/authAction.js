import Axios from 'axios'
import Swal from 'sweetalert2'

const baseUrlServer = 'http://localhost:5000'   


export const loginAction =(username, password)=>{
    return dispatch=>{
        console.log(username,password)
        Axios.post(baseUrlServer + "/user/login", {
        username,
        password,
        })
        .then(({data})=>{
            // return <Redirect to={'/'}/>
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Success <br> Welcome to POSAN Cashier Dashboard',
                showConfirmButton: false,
                timer: 1500
              })
              .then(()=>{
                dispatch({type:'LOGIN_SUCCESS'})
                localStorage.setItem('access_token', data.access_token)
              })
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