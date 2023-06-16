import '../../styles/Container.css'

export default function Container() {
    return (
        <>
            <div>
            {/* primeiro bloco de texto e imagem */}
                <div className="container-imagem">
                    <div className='imagem'>
                        <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80" alt="" />
                    </div>
                    <div className="bloco-texto">
                        <div className="texto">
                            <h1>O banco da sua vida e da sua empresa</h1>
                        </div>
                    </div>
                </div>




                {/* segundo bloco de imagem e texto */}
                <div>
                    <div className='hum'>
                        <h1>Seja feliz igual nossos Clientes</h1>
                    </div>
                </div>
                <div className='investir'>
                <h1 >Conheça todos os modos de investimentos </h1>
                    <img className='dinheiro' src="https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    

                </div>


                {/* terceiro bloco de texto e imagem */}
                <div className="hdois">
                    <h1>Nossos metodos de investimento são os melhores</h1></div>

                <div className="assunto">
                    <img className='imagemAssunto' src="https://images.unsplash.com/photo-1613442301239-ea2478101ea7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    <h1>
                        Descubra os Fundos de Investimento do nosso banco.
                        Uma opção versátil para diversificar seu portfólio e maximizar seu potencial financeiro. Confie em nossos gestores
                        especializados para tomar
                        as melhores decisões de investimento.</h1>
                </div>
                <div className="fundoBranco">
                    <div className="quadradoDireito"></div>
                    <h1>Explore nossos cartões de crédito e débito para uma experiência financeira completa. Compras, pagamentos e saques mais fáceis e seguros em todo lugar.</h1>
                    <img className='imgCartao' src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className="quadradoEsquerdo"></div>
                </div>
            </div>

        </>
    )
}