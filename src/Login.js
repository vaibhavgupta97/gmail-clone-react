import React from 'react';
import './Login.css';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice';
import {auth,provider} from './firebase';
import {Button} from '@material-ui/core';
function Login() {
    const dispatch=useDispatch()
    const signIn=()=>{
auth.signInWithPopup(provider)
.then(({user})=>{
    dispatch(
        login({
            displayName:user.displayName,
            email:user.email,
            photoUrl:user.photoURL,
        })
    )
    })
.catch((error)=>alert(error.message));
    };
return (
<div className="login">
<div className="login__container">
<img src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png" 
alt="gmail"/> 
<Button variant="contained" 
color="primary" 
onClick={signIn}>Login</Button>
</div> 
</div>
)
}

export default Login;
