import React from 'react'
import './Sign.css'
import {Link,useHistory} from "react-router-dom"
import { useState } from 'react';
import {auth} from "./firebase";


function Sign() {
  const history=useHistory();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const signin=e=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth =>{
      history.push('/')
    })
    .catch(error=>alert(error.message))

  }
  const register =e=>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth) =>{
      console.log(auth);
      if(auth){
        history.push('/')

      }

    })
    .catch(error => alert(error.message))

  }
  return (
    <div className='signin'>
      <h3 className='h'><span className='c'> LOGIN TO THE APP</span></h3>
      {/* <Link to='/'>
        <img className='sign_logo' src="https://th.bing.com/th/id/OIP.A2w-XnU0K6aYXr0IFCzILQHaCO?w=342&h=105&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        </Link> */}
        <div className='sign_container'>
       
         <h1> Sign in</h1>
         <form>
           <h5>E-mail</h5>
           <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

           <h5>Password</h5>
           <input type='password' value={password}
           onChange={e=>setPassword(e.target.value)}/>
           <button className='sign_but' onClick={signin} type='submit'>Continue</button>
        </form>
        {
        
        <h6>New to Amazon </h6>
        <button onClick={register} type='submit'
         className='register_container'>Create YourAccount</button> */}

        </div>
        {/* <footer className='footer'>
<div className='solid'>
          <b>Get to Know Us</b><br/>

      </footer>
        */}
    </div>
  )
}

export default Sign