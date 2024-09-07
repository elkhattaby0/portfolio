import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import Logo from "../assets/svg/Logo";
import Palette from "./Palette";
import Menu from "../assets/svg/Menu";

const MenuResposive = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePath, setActivePath] = useState('/'); 
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const style = {
        menu: "flex items-center justify-center text-3xl font-bold py-2 w-[40px] h-[40px] rounded-md z-0 hover:border rounded",
        content: `fixed inset-0 z-10 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700 ease-in-out w-full h-screen flex flex-col items-end justify-start`,
        btn: "text-3xl rounded-md w-10 h-10 hover:shadow-md hover:bg-red-500 hover:text-none",
    };

    const getLinkClass = (path) => {
        return `text-left text-xl font-bold uppercase py-2 px  ${activePath === path ? "border-b-4 border-[#3A86FF]" : ""}`;
    };


    return (
        <section>
            <button 
                className={style.menu}
                onClick={toggleMenu}
            >
                <Menu color={Palette.HighlightColor} />
            </button>
            <div 
                className={style.content} 
                style={{backgroundColor: Palette.primaryColor}}
            >
                
                <div 
                    className={`h-full flex flex-col items-center justify-between w-10/12 shadow-l-md transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-1000 ease-in-out`}
                    style={{backgroundColor:Palette.backgroundColor}}
                >
                    <div 
                        className="border-b w-10/12 flex items-center justify-between"
                    >
                        <h1 
                            className="uppercase py-4"
                        >
                            <Link to="/" onClick={toggleMenu}>
                                <Logo
                                    logo={Palette.HighlightColor}
                                    bk="none"
                                    w="20px"
                                />
                            </Link>
                        </h1>
                        <button 
                            className={style.btn} 
                            style={{color:Palette.HighlightColor}}
                            onClick={toggleMenu}
                        >
                            x
                        </button>
                    </div>
                    <div className="w-10/12 h-full mt-10">
                        {['Home', 'Projects', 'Services', 'Contact', 'About'].map((item, index) => {
                            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            return (
                                <h3 
                                    key={index} 
                                    className={getLinkClass(path)}
                                    style={{color:Palette.accentColor}}
                                >
                                    <Link to={path} onClick={() => {
                                        toggleMenu();
                                        setActivePath(path);
                                    }}>
                                        {item}
                                    </Link>
                                </h3>
                            );
                        })}
                    </div>
                    <div 
                        className="w-full flex justify-center"
                        style={{background: Palette.backgroundColor}}    
                    >
                        <div 
                            className="w-10/12 py-4 flex flex-col justify-center items-center"   
                        >
                            <p 
                                className="text-[#f8f7f4] text-xl text-semibold text-center ml-2"
                                style={{color:Palette.accentColor}}     
                            >Follow me</p>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuResposive;
