import React from 'react'
import { useParams } from 'react-router-dom'

const Professionals = () => {

    const params = useParams()
    // aqui vem um fetch para a rota de profissionais. sera assim com todas as paginas de requests
    // useLocation para search
        
    return (
        <div>
            <h1>Profissional: {params.id}</h1>
        </div>
    )
    }

export default Professionals