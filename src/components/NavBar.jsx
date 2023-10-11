import Logo from '../assets/logo.png'
import  './NavBar.module.css'

export default function NavBar() {
    return (
        <nav>
            <p>Home</p>
            <p>About</p>
            <img src={Logo} alt="Logo-of-Proxima" />
            <p>Products</p>
            <p>Contact</p>
        </nav>
    );
}
