import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth) {
                history('/');
            }
        })
        .catch(error => alert(error.message));
    }
    const register = e => {
        e.preventDefault();
        //register
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth) {
                history('/');
            }
        })
        .catch(error => alert(error));
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
        </Link>
        <div className='container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password'  value={password} onChange={e => setPassword(e.target.value)} />

                <button className='signin-button' type='submit' onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in you are agree to the AMAZON DUMMY CLONE Conditions of use & sale. Please see our privacy Notice, ourour Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className='signin-button register-button' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login