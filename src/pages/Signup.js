import React from 'react'
import Navigation from '../components/Navigation'
import { useState } from 'react'
import { auth,app } from '../Firebase';
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate =useNavigate('');

    const signUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
  
    //console.log(userCredential.user)
    navigate('/login')
  })
  .catch((error) => {
  console.log(error)
  });
}
  return (
    <>
    <Navigation />
    <div className="container-signin">
    <section class="wrapper">
        <div class="heading">
        <h1 class="text text-large"><strong>Register</strong></h1>
            <p class="text text-normal">Already a user?<span><a href="/login" class="text text-links">Log in</a></span></p>
        </div>
        <form onSubmit={signUp}>
        <div class="input-control">
        <input type="email" placeholder="Enter your email"  value={email} onChange={(e)=> setEmail(e.target.value)} class="input-field"></input>
        </div>
        <div class="input-control">
            <input type="password" placeholder="Enter your password"  value={password}onChange={(e)=> setPassword(e.target.value)}  class="input-field"></input>
        </div>

        <button type="submit" name="submit" class="input-submit" value="Sign In">submit</button>
        </form>
    </section>
    </div>
    </>
  )
}



export default SignUp