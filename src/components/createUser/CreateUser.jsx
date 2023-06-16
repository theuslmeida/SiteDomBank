import "../../styles/CreateUser.css"
import {useState} from "react"
import axios from "axios";
export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [imagem, setImagem] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('cpf', cpf);
            formData.append('email', email);
            formData.append('imagem', imagem);

            const response = await axios.post('http://127.0.0.1:8000/api_cliente/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data); // Exibe a resposta da API no console

            // Limpa o formulário
            setNome('');
            setCpf('');
            setImagem(null);

            alert('Cliente cadastrado com sucesso!');
            window.location.href = "/login"
        }

        catch (error) {
            alert('Erro ao cadastrar cliente!');
            console.error(error);
        }
    };


    return (
        <>
            <div>
                <h1 className="h1Create">Sistema de Cadastro</h1>
            <div className="tudo">
                <img className="imagem" src="https://images.unsplash.com/photo-1534865007446-5214dca11db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                <div className="imgCadastro">
                    <div className="create">
                        <div className="create-div">
                            <form onSubmit={handleSubmit}>
                                <h1>Cadastrar</h1>
                                <div>
                                    <input
                                    placeholder="Nome"
                                        type="text"
                                        id="nome"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                    placeholder="CPF"
                                        type="text"
                                        id="cpf"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                    placeholder="E-mail"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                
                                <input type="submit"></input>
                                <div>
                                    <input
                                        type="file"
                                        id="imagem"
                                        onChange={(e) => setImagem(e.target.files[0])}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}