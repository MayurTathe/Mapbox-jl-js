import React, { useState } from 'react';
import './signUp.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted with data:', formData);
        localStorage.setItem('userCredentials', JSON.stringify(formData));
        navigate('/login');
    };

    const changeRoute = () => {
        // navigate('/login');
    }

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" onClick={changeRoute}>Sign Up</button>
            </form>
            <p>  Already have an account?
                <Link className="link" to="/login"><span className='loginBtn'>Login</span></Link>
            </p>
        </div>
    );
};

export default SignUp;
