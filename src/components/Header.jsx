import '../style/Header.css';
import search from '../assets/search.png';
import Logo from '../assets/Logo.png'

export const Header = () => {
    return(
            <div className="header-conteiner">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="header-menu">
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>sevice</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className='header-search'>
                    <input type="text" placeholder="search..." />
                    <img src={search} alt="search" />
                </div>
            </div> 
    )
};