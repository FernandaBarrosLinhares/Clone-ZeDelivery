import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login(){

    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const navigate= useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        if(email === 'admin@adimin.com' && senha === 'admin123'){

            navigate('/home')
        }
        alert ('email e/ou senha incorretos')
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
            <input 
                    type="texto" 
                    placeholder="Digite seu email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            <input 
                    type="password" 
                    placeholder="Digite sua senha"
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
            />

                <button>Entrar</button>
            </form>
        </>
    )
}

export default Login