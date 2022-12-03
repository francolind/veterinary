import '../style/Header.css';
import search from '../assets/search.png';
import menu from '../assets/menuW.png';
import Logo from '../assets/Logo.png'
import close from '../assets/closeW.png'
import { useState } from 'react';

export const Header = () => {
    const [actMenu,setActMenu] = useState(true);
    const toggleMenu = ()=>{
        setActMenu(!menu)
    }
    return(
            <div className="header-conteiner">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={`header-menu ${actMenu ? 'isActive' : ''} `}>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>sevice</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className='button-menu' onClick={toggleMenu}>{
                    actMenu ? (<img className='button-menu-ham' src={close} alt="" />) :
                    (<img className='button-menu-close' src={menu} alt="" />)
                }
                </div>
                <div className='header-search'>
                    <input type="text" placeholder="search..." />
                    <img src={search} alt="search" />
                </div>
            </div> 
    )
};
// {`header-menu ${true ? 'isActive' : ''} `}