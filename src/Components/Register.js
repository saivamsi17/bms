import React from 'react';
import { useState } from 'react';

export default function Register() {


    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    function signUp(){
        // console.warn(name, password,email);

        let item = {name, password,email};
    }
    
    return (
        <div className='col-sm-6 offset-sm-3'>
                <h1>Register</h1>

                <input type="text" value={name} onChange={(element) => setName(element.target.value)} className='form-control' placeholder='name' />
                <br/>

                <input type="password"  value={password} onChange={(element) => setPassword(element.target.value)} className='form-control' placeholder='password' />
                <br/>

                <input type="text" value={email} onChange={(element) => setEmail(element.target.value)} className='form-control' placeholder='Email' />
                <br/>            

                <button onClick={signUp} className='btn btn-primary' >Sign Up</button>
        </div>
    )
}
