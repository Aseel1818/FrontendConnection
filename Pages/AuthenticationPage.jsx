import React, { useState } from "react";
import apiStore from '../Store/apiStore';

export function SignUp() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function SignupSubmit(e) {
        e.preventDefault();
        apiStore.register({ email, password, name }, setMessage);
    }

    return (
        <div>
            <h2>Sign up page</h2>
            <form onSubmit={SignupSubmit}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
                
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
                
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required />
                
                <button type="submit">Sign Up</button>
                <p>{message}</p>
            </form>
        </div>
    );
}

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function LoginSubmit(e) {
        e.preventDefault();
        apiStore.login({ email, password }, setMessage);
    }

    return (
        <div>
            <h2>Login page</h2>
            <form onSubmit={LoginSubmit}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
                
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required />
                
                <button type="submit">Login</button>
                <p>{message}</p>
            </form>
        </div>
    );
}

export default {Login, SignUp};