import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import './App.css'
import TelaLogin from "./pages/telaLogin/TelaLogin";
import Create from "./pages/create/create";
import User from "./pages/user/User";
import Homepage from "./pages/homepage/HomePage";
import Transacao from "./components/transação/transacao";
import Trasacaoo from "./components/transaçãoo/transacaoo";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<TelaLogin/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/create-user" element={<User/>}/>
          <Route path="/home-page" element={<Homepage/>}/>
          <Route path="/transacao" element={<Transacao/>}/>
          <Route path="/transacaoo" element={<Trasacaoo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
