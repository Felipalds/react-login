import React from 'react'

const LoginForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let res = await fetch('http://localhost:8080/login', {
                method: "POST",
                body: JSON.stringify({
                    email, password
                })
            })
            if(res.status === 200){
                setEmail("")
                setPassword("")
                console.log("Request feita")
            } else {
                console.log("Erro ocorreu")
            }
        } catch(e){
            console.error(e)
        }
    }

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('') 
        
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Digite seu e-mail</label>
            <input 
                id="email"
                type="email" 
                value={email} 
                placeholder="Email"
                onChange={event => setEmail(event.target.value)}
            >
            </input>

            <label htmlFor='password'>Digite sua senha</label>
            <input
                id="password"
                type="password"
                value={password}
                placeholder="Senha"
                onChange={event => setPassword(event.target.value)}
            >
            </input>

            <button disabled={email.length === 0 || password.length < 6}>Entrar</button>
        </form>
    )
}

export default LoginForm