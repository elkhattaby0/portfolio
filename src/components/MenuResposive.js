import { useState } from "react";
import { Link } from "react-router-dom";
import ParagraphFive from "./ui/Paragraph/ParagraphFive";
import SocialMedia from "./SocialMedia";
import Logo from "./ui/Logo";
import Palette from "./Palette";

const MenuResposive = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const style = {
        menu: "flex items-center justify-center text-3xl font-bold py-2 w-[40px] h-[40px] rounded-md z-0 shadow hover:shadow-md",
        content: `fixed inset-0 z-10 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700 ease-in-out w-full h-screen flex flex-col items-end justify-start`,
        btn: "text-3xl rounded-md w-10 h-10 hover:shadow-md ",
        link: "w-10/12 text-xl my-2 hover:underline hover:text-2xl",
    };

    return (
        <div>
            <button 
                className={style.menu} 
                style={{color: Palette.primaryColor}}
                onClick={toggleMenu}
            >
                &#9776;
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
                        // style={{backgroundColor: Palette.primaryColor}}
                    >
                        <ParagraphFive 
                            uicss="uppercase py-4"
                        >
                            <Link to="/" onClick={toggleMenu}>
                                <Logo
                                    logo={Palette.HighlightColor}
                                    bk="none"
                                    w="20px"
                                />
                            </Link>
                        </ParagraphFive>
                        <button 
                            className={style.btn} 
                            style={{color:Palette.HighlightColor}}
                            onClick={toggleMenu}
                        >
                            x
                        </button>
                    </div>
                    <div className="w-10/12 h-full mt-10">
                        {['Home', 'Projects', 'Services', 'Contact', 'About'].map((item, index) => (
                            <ParagraphFive 
                                key={index} 
                                uicss={style.link}
                                stl={Palette.accentColor}
                            >
                                <Link to={`/${item.toLowerCase()}`} onClick={toggleMenu}>
                                    {item}
                                </Link>
                            </ParagraphFive>
                        ))}
                    </div>
                    <div 
                        className="w-full flex justify-center"
                        style={{background: Palette.backgroundColor}}    
                    >
                        <div 
                            className="w-10/12 py-4 flex flex-col justify-center items-center"   
                        >
                            <p 
                                className="text-[#f8f7f4] text-xl text-semibold  text-center ml-2 my-"
                                style={{color:Palette.accentColor}}     
                            >Follow me</p>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuResposive;
