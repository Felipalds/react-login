import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    const navigate = useNavigate()


    function handleClick (){
        navigate("/")
    }

    return (
        <div>
            <h1>Faça seu login</h1>
            <button onClick={handleClick}>Logar</button>
        </div>
    )
}

export default Login