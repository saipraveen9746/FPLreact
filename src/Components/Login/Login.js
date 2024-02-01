import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

// import { Link } from 'react-router-dom';

// import {  Link, useNavigate} from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
// import Register from '../Signup/Signup';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Logging in with email:", email, 'and password:', password);
        try {
            const { data } = await axios.post('http://127.0.0.1:8000/api/token/', {
                email,
                password
            });
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
       
    };
 


    return (
        <div className='login-container'>
            <form onSubmit={handleLogin} className='login-form'>
                
                <label className='lab1'>Email</label> <label className='lab2'>Password</label>
                <div className='login-container-2'>
                    <p className='Login-title'>Login</p>
                    <input
                        className='login-input-1'
                        type='text'
                        name='email'
                       
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        className='login-input-2'
                        type='password' 
                        name='password'
                        
                        value={password}
                        onChange={handlePasswordChange}
                    />

                    <button className='button' type="submit">Login</button>
                    </div>
                <div className='Signup-alert'> 
                    <p className='Signup-alert2'>Don't have a account</p>
                  
                    <nav><NavLink to="register"><button className='Signup' type="submit" >Signup</button></NavLink></nav>
                </div>
 
                
            </form>
            
        </div>
    );
}

export default Login;
