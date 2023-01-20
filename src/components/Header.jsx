import '../style/Header.css';
import search from '../assets/search.png';
import menu from '../assets/menuA.png';
import Logo from '../assets/Logo.png'
import close from '../assets/x.png'
import { useState } from 'react';

export const Header = () => {
    const [actMenu,setActMenu] = useState(false);
    const toggleMenu = ()=>{
        setActMenu(!actMenu)
    }
    return(
            <div className="header-conteiner">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={ actMenu ? 'header-menu' : 'menu'}>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>sevice</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className='button-menu' onClick={toggleMenu}>{
                    actMenu ? (<div><img className='button-menu-ham' src={close} alt="" /></div>) :
                    (<div><img className='button-menu-close' src={menu} alt="" /></div>)
                }
                </div>
                <div className='header-search'>
                    <input type="text" placeholder="search..." />
                    <img src={search} alt="search" />
                </div>
            </div> 
    )
};
