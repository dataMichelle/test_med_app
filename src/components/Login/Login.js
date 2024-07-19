import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = formData.email ? "" : "This field is required.";
        tempErrors.password = formData.password ? "" : "This field is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formData);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <h2 className="text-center">Login</h2>
                    <div className="text-center mb-3">
                        <span>
                            Are you a new member? <Link to="/signup" className="signup-link">Sign Up Here</Link>
                        </span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <div className="input-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <span
                                        className="input-group-text"
                                        id="togglePassword"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            const passwordField = document.getElementById('password');
                                            if (passwordField.type === 'password') {
                                                passwordField.type = 'text';
                                                document.getElementById('togglePassword').innerText = 'Hide';
                                            } else {
                                                passwordField.type = 'password';
                                                document.getElementById('togglePassword').innerText = 'Show';
                                            }
                                        }}
                                    >
                                        Show
                                    </span>
                                </div>
                            </div>
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="form-buttons mb-3 d-flex justify-content-between">
                            <div className="button-group">
                                <button type="reset" className="btn btn-secondary btn-sm">
                                    Reset
                                </button>
                                <button type="submit" className="btn btn-primary btn-sm ml-2">
                                    Sign In
                                </button>
                            </div>
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
