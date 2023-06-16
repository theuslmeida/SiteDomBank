import"../../styles/transacaoo.css"

export default function Trasacaoo(){
    const usuario = localStorage.getItem("usuario")
    const email = localStorage.getItem("email")
    return(
        <>
            <div className="black-body">
                <div className="transferirFinal">
                    <h1 className="H1Transferir">Transferencia</h1>
                    <img src="" alt="" />
                    <input type="text" placeholder="digite o valor da transferencia" />
                    <div className="dados">
                        <h1>Nome: {usuario}</h1>
                        <h1>Email: {email}</h1>
                        <div className="banco">
                            <h1>Banco:<img src="../../../public/images/dombank.png" className="transferImg"/> </h1>
                        </div>
                    </div>    
                    <button className="enviar">Finalizar</button>
                </div>
            </div>
        </>
    )
}