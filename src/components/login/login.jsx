import '../../styles/login.css'
import {useState} from "react"
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            username: username,
            password: password,
        };

        axios
            .post('http://127.0.0.1:8000/api_cliente/', loginData, {
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            })
            .then((response) => {
                const token_cli = response.data.access;
                localStorage.setItem('token_cli', token_cli);
                localStorage.setItem('nome', username);
                console.log(token_cli);
                window.location.href = '/home-page';
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (


        <>
            <div>
            <h1 className='h1Sistema'>Sistema de Login</h1>
                <div className="junto">
                    <img className='imagemLogin' src="https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" />
                        <div className="logar">
                            <div className="login-div">
                                <form>
                                    <h1>Login</h1>
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="Enter your name:"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter your cpf:"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <input type='submit' onClick={handleSubmit}></input>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>





        </>
    )
}