import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/login/LoginForm'

const Login = () => {
    
    const navigate = useNavigate()


    function handleClick (){
        navigate("/")
    }

    return (
        <div>
            <h1>Faça seu login</h1>
            <LoginForm />
        </div>
    )
}

export default Login