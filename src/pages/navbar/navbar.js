import './navbar.css';
import { useState } from "react";
import Logo from "../../assets/svg/Logo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar'>
            <a href='/'>
            <h1>
                <Logo logo="#EFFFFB" bk="none" />
            </h1>
            </a>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰ {/* Hamburger icon */}
            </button>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>
                    ✕ {/* Close button */}
                </button>
                <li><a href='#about' onClick={toggleMenu}>About</a></li>
                <li><a href='#education' onClick={toggleMenu}>Education</a></li>
                <li><a href='#projects' onClick={toggleMenu}>Projects</a></li>
                <li><a href='#contact' onClick={toggleMenu}>Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
