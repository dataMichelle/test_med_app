import React, { useState } from 'react';
import './Sign_Up.css';
import { Link } from 'react-router-dom';

function Sign_Up() {
    const [formData, setFormData] = useState({
        userRole: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.userRole = formData.userRole ? "" : "This field is required.";
        tempErrors.firstName = formData.firstName ? "" : "This field is required.";
        tempErrors.lastName = formData.lastName ? "" : "This field is required.";
        tempErrors.email = formData.email ? "" : "This field is required.";
        tempErrors.password = formData.password ? "" : "This field is required.";
        tempErrors.confirmPassword = formData.confirmPassword ? "" : "This field is required.";
        tempErrors.phoneNumber = formData.phoneNumber.length === 10 ? "" : "Phone number must be 10 digits.";
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
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3 right-align">
                            <span>
                                Already a member? <Link to="/login" className="login-link">Login</Link>
                            </span>
                        </div>
                        <div className="form-group mb-3">
                            <div className="custom-control custom-radio">
                                <input
                                    type="radio"
                                    id="customRadio1"
                                    name="userRole"
                                    value="Patient"
                                    className="custom-control-input"
                                    required
                                    onChange={handleChange}
                                />
                                <label
                                    className="custom-control-label me-3"
                                    htmlFor="customRadio1"
                                >
                                    Patient
                                </label>
                                <input
                                    type="radio"
                                    id="customRadio2"
                                    name="userRole"
                                    value="Doctor"
                                    className="custom-control-input"
                                    required
                                    onChange={handleChange}
                                />
                                <label className="custom-control-label" htmlFor="customRadio2">
                                    Doctor
                                </label>
                            </div>
                            {errors.userRole && <p className="error">{errors.userRole}</p>}
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.firstName && <p className="error">{errors.firstName}</p>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.lastName && <p className="error">{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword2"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up;
