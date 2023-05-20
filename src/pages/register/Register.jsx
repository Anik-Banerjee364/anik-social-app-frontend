import React from 'react'
import  "./register.css";
import { useRef } from 'react'; 
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
const username = useRef();
const email = useRef();
const password = useRef();
const passwordAgain = useRef();
const navigate = useNavigate();

const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value) {
        passwordAgain.current.setCustomValidity("Password do not match!");
    } else {
        const user = {
            userName: username.current.value,
            email: email.current.value,
            password: password.current.value,
        };
        try {
            const res = await axios.post("/auth/register", user);
            navigate('/login');
        } catch(err) {
            console.log(err);
        }
    }
};
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">AnikSocial</h3>
                <span className='loginDesc'> Connect with the world on AnikSocial</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="UserName" required ref={username} className="loginInput" />
                    <input placeholder="Email" required ref={email} className="loginInput" type='email'/>
                    <input placeholder="Password" required ref={password} className="loginInput" type='password' minLength={4}/>
                    <input placeholder="Confirm Password" required ref={passwordAgain} className="loginInput" type='password' minLength={4}/>
                    <button className="loginButton" type='submit'>Sign Up</button>
                    <Link to={"/login"} className='linkLogin'>
                    <button className="loginRegisterButton">Log into your account</button>
                    </Link>
                </form>
            </div>
        </div>
      
    </div>
  )
}
