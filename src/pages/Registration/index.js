import React, { Component } from 'react';
import Signup from '../../components/Signup';
import './styles.scss';

class Registration extends Component{
    render(){
        return (
            <div>
            <style>
                {'body {background-color:royalblue}'}
            </style>
             <Signup />
        </div>
        )
    }
}

export default Registration;