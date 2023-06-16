import { useState } from "react"
import axios from "axios";
import "../../styles/CadUser.css"

export default function CadUser() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const dados_usuario = {
            username: username,
            email: email,
            password: password,
            is_superuser: true,
            is_staff: true,
        };

        axios
            .post('http://127.0.0.1:8000/usuarios/', dados_usuario, {
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            })
            .then((response) => {
                const resposta_servidor = response.data;
                const msg_retorno = document.getElementById('msg_retorno');
                msg_retorno.innerHTML = `
          <div id="dados_usuario">
            <div id="nome_cadastrado">
              <p>Nome: ${resposta_servidor.username}</p>
            </div>
            <div id="email_cadastrado">
              <p>E-mail: ${resposta_servidor.email}</p>
            </div>
            <div id="senha_cadastrado">
              <p>Senha: ******</p>
            </div>
          </div>`;
                alert('Nome e senha de usuario cadastrado com sucesso!');
                window.location.href = "/login"
            })
            .catch((error) => {
                alert('Deu erro!')
                console.error(error);
            });
    };

    return (
<div>
        <div className="oi"></div>
        <h1 className="h1Registro">Sistema de registro</h1>
            <div className="container">
            <div className="login"> 
                <form className="forms"  onSubmit={handleSubmit} >
                <h1>Registro</h1>
                    <div className="nome">
                    <label htmlFor="nome">Usuario:</label>
                    <input
                        placeholder="Digite seu nome"
                        name="nome"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                    <div className="email">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        
                        placeholder="Digite seu e-mail"
                        name="email"
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="senha">
                    <label htmlFor="password">Password:</label>
                    <input
                        
                        placeholder="Digite sua senha"
                        name="password"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <input name="is_superuser" id="is_superuser" type="hidden" value="True" />
                    <input name="is_staff" id="is_staff" type="hidden" value="True" />
                    <button type="submit"className="enviar">Enviar</button>
                </form>
              </div>
                 <img src="https://images.unsplash.com/photo-1531819177115-428566ccfb50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80" alt="" />
             </div> 
</div>
    )
}