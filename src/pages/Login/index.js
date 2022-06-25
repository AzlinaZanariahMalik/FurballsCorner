import React, { useEffect } from "react";
import './styles.scss';
import SignIn from '../../components/Signin';


const Login = props => {
    return(
        <div>
            <style>
                {'body {background-color:royalblue}'}
            </style>
             <SignIn />
        </div>
    ) 
}

export default Login; 