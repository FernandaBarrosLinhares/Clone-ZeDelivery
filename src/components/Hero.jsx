import './Hero.css'

function Hero(){
    return(
        <>
         <div className='hero'>
            <div className='text'>
                <h5 className='text-hero'>Bebida rápida, gelada e no precinho? </h5>
                <h4 className='text-hero'>O Zé entrega tudo </h4>
            </div>
            <div className='input-div'>
                <input className='input-hero' type="text"  placeholder= "Inserir endereçonpara ver preço"/>
            </div>
         </div>
        </>
    
    )
}

export default Hero