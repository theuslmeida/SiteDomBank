import '../../styles/NavBar.css'

export default function NavBar() {

    return (
        <div className='navbar'>
            <nav>
                <div className="menu">
                    <img src="../../../public/images/ds-removebg-preview.png" alt="" />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/create">Cadastre-se</a></li>
                    </ul>
                    
                    <h1>DomBank</h1>
                    
                </div>
            </nav>
        </div>
    )
}