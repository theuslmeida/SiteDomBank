import "../../styles/containerHome.css"
import { useState } from "react"
import {BsFillPersonFill, BsArrowDownUp} from "react-icons/Bs"
import {AiOutlineBars, AiFillCreditCard} from "react-icons/Ai"
import axios from "axios"




export default function ContainerHome(){
    const nome = localStorage.getItem("nome")
    const [moeda, setmoeda] = useState()
    axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')

    .then(resp=>{
    console.log(resp)
    const data = resp.data
    const br = data.USDBRL.bid
    setmoeda(br)
    console.log(br)
  })


    console.log();
    return(
        // parte preta do lado esquerdo
        <div className="back-body">
            <div className="espaco"></div>
            <div className="blocoEsquerdo">
                <div className="perfil">
                    <div className="botaoPerfil">
                    <button><BsFillPersonFill size={30}/></button>
                    <div className="saldo">Saldo: R$ 1000,00</div>
                    <div className="saldo">dolar: {moeda}</div>
                    <div className="saldo">Olá, {nome}</div>

                    </div>
                </div>
                <div className="transacoes">
                    

                    <h1><BsArrowDownUp className="iconArrom"/><a href="/transacao">Transações</a></h1>
                </div>
                <div className="extrato">

                    <h1><AiOutlineBars className="iconArrom"/>Extrato</h1>
                </div>
                <div className="iconPerfil">

                    <h1><BsFillPersonFill className="iconArrom"/>Perfil</h1>
                </div>
                <div className="imagemEfect">
                    <img src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                
                </div>
                {/* valor da fatura e cartoes */}
                <div className="tabCredito">
                    <div className="fatura">
                        <h1>valor da fatura:</h1>
                        <h1>R$20,00</h1>
                        <div className="cartaoDeCredito">
                            <div className="cartao"><AiFillCreditCard className="card"/><div className="meu"><h1>meus cartoes Credito</h1></div></div>
                        </div>
                        <div className="CartaoDeDebito">
                            <div className="cartaoDebito"><AiFillCreditCard className="card"/><div className="meu"><h1>meus cartoes Debito</h1></div></div>
                        </div>
                    </div>
                    {/* imagens e containers */}
                    <div className="containerHome">
                     <div className="imgTexto">
                            <div className="sobreNos">
                            <h1>sobre nós</h1>
                            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
                            </div>
                            <div className="novidades">
                            <h1>nossas novidades </h1>
                            <img src="https://images.unsplash.com/photo-1650984661525-7e6b1b874e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                             </div>
                            <div className="novidades">
                            <h1>metodologias</h1>
                            <img src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                             </div>
                     </div>
                        <h1 className="texto">Cartões e transferências bancárias: praticidade e segurança para suas transações.</h1>
                    </div>
            </div>
 
            

        </div>
           
            
        
    )
}