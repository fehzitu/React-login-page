// import useState to use later
import { useState } from "react";

function Login() {
    // get the inputs from user form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // normally we use "handle" as a name to the function that will manipulate the values
    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log(data);
    };

    // here we return the html inside js
    return (
        <div className='login-form-wrap'>
            <h2>Login</h2>
            <form className='login-form'>
                {/* "onChange" in one of various function of react */}
                <input type='email' name='email' placeholder='email' required onChange={e => setEmail(e.target.value)}></input>
                <input type='password' name='password' placeholder='password' required onChange={e => setPassword(e.target.value)}></input>
                <button type='submit' className='btn-login' onClick={e => handleLogin(e)}>Login</button>
            </form>
        </div>
    );
};

// export this component to use on the main app
export default Login;