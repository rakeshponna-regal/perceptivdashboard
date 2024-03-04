import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import '../login/login.css'
import logo from "../../assets/images/Perceptiv-logo.svg";
import loader from "../../assets/images/loading_w.svg";
import { useNavigate } from 'react-router-dom';

import { RiErrorWarningFill } from "react-icons/ri";

const LoginScreen = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({})
    const [isNeedHelp, setIsNeedHelp] = useState(false)
    const [state, setState] = useState({
        userName: "",
        password: "",
    });
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleHelpClick = () => {
        setIsNeedHelp(!isNeedHelp);
    };

    const validate =  (values) => {
        const errorMessages = {}
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!values.userName) {
            errorMessages.userName = 'UserName required'
        } else if (!regex.test(values.userName)) {
            errorMessages.userName = "Please enter a valid email address"
        }
        if (!values.password) {
            errorMessages.password = 'Password required'
        } else if (values.password.length < 6) {
            errorMessages.password = 'Password must be more than 6 characters'
        }
        return errorMessages
    }

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            setIsLoading(true)
            console.log('Success Sign in ')
            setInterval(() => {
                setIsLoading(false)
                navigate('/home');
            }, 5000);
        }
    }, [errors])

    const handleSubmit = (event) => {
        event.preventDefault();
         setErrors(validate(state))
        setIsSubmit(true)
    };
    return (
        <div >
            {/* <Header /> */}
            <div className='login-container'>
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <img className='logo' src={logo} alt="logo" />

                        <div className='view' />
                        {
                            isLoading ? (<>
                                <img className='loading-spinner' src={loader} alt="logo" />
                            </>) : (<></>)
                        }

                        <h1>Sign In</h1>
                        <label className='label'>UserName</label>
                        <div className='input-box'>
                            <input type="text"
                                placeholder='Username'
                                name='userName'
                                value={state.userName}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <label className='label'>
                            {errors.userName && (
                                <p style={{ color: "red", marginRight: '5px', paddingTop: '5px' ,fontWeight:200 }}>
                                    <RiErrorWarningFill style={{ marginRight: '5px', verticalAlign: "middle" }} />
                                    {errors.userName}</p>
                            )}
                        </label>
                        <label className='label'>Password</label>
                        <div className='input-box'>
                            <input type="password"
                                placeholder='Password'
                                name='password'
                                value={state.password}
                                onChange={handleChange}
                            />
                        </div>
                        <label className='label'>
                            {errors.password && (
                                <p style={{ color: "red", marginRight: '5px', paddingTop: '5px',fontWeight:200 }}>
                                    <RiErrorWarningFill style={{ marginRight: '5px', verticalAlign: "middle" }} />
                                    {errors.password}</p>
                            )}
                        </label>
                        <div className='remember-forgot'>
                            <label>
                                <input type='checkbox' />Remember me
                            </label>
                            {/* <a href='/forgotpassword'>Forgot password?</a> */}
                        </div>
                        <button type='Submit'>Sign in</button>
                        {/* <input type='submit' value="Submit" ></input> */}

                        <div className='register-link'>
                            <p onClick={handleHelpClick}>
                                <a >Need help signing in?</a>
                            </p>
                        </div>
                        {
                            isNeedHelp ? (<>
                                <div className='register-link'>
                                    <p>
                                        <a href="/register" >Forgot password?</a>
                                    </p>
                                </div>
                                <div className='register-link'>
                                    <p>
                                        <a href="/register" >Help</a>
                                    </p>
                                </div>
                            </>) : (<></>)
                        }
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginScreen
