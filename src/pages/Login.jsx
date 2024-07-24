import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Login.css'


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
            <div className="p-login">
                <div className="f-login">
                    <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="logomarca Ze delivery"/>
                    <h4>Entrar na conta com outros serviços</h4>
                    <button className='btn-facebook'>Continuar com Facebook</button>
                    <button className='btn-apple'>Continuar com Apple</button>
                    
                    <h4>Insira seu email para entrar ou cadastrar</h4>
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
                    </form>
                    <button className='btn-entrar'>CONTINUAR COM E-MAIL</button>
                    <h4>Precisa de ajuda? Entre no <a href="#">Me ajuda, Zé!</a></h4>
                </div>
            </div>
        </>
    )
}

export default Login