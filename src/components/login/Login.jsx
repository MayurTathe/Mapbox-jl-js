import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication logic using local storage
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));

    const storedUserEmail = userCredentials.email;
    const storedPassword = userCredentials.password;

    // console.log("email" + userEmail);
    // console.log("password" + password);
    // console.log("email" + storedUserEmail);
    // console.log("password" + storedPassword);

    if (!userEmail || !password) {
      setError('Please enter both userEmail and password.');
      return;
    }

    if (userEmail === storedUserEmail && password === storedPassword) {
      localStorage.setItem('isLoggedIn', true);
      navigate('/map');
      
    } else {
      setError('Invalid userEmail or password.');
    }
  };

  return (
    
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p>  Don’t have an account?
                <Link className="link" to="/"><span className='loginBtn'>Sign In</span></Link>
                {/* <span className='loginBtn'>login</span> */}
            </p>
    </div>
  );
};


export default Login;
