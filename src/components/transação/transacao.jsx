import { useState } from "react"
import "../../styles/transacao.css"
export default function Transacao(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('usuario', nome);
        localStorage.setItem('email', email);
        console.log(email,nome)
        window.location.href = '/transacaoo';
    }
    return(
        <div>
            <div className="fundo">
                <div className="quadrado">
                  <h1>Transferencia</h1>
                  <img className="imagemTransfer" src="../../../public/images/dombank.png" alt="" />
                    <div className="componentes">
                        <div className="nome">
                            <input type="text" placeholder="digite o nome" 
                            onChange={(e)=> setNome (e.target.value)}
                            />
                        </div>
                        <div className="email">
                            <input type="text" placeholder="digite o email"
                            onChange={(e)=>setEmail (e.target.value)}
                            />
                        </div>
                        <button className="botao" onClick={handleSubmit}>Enviar</button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}