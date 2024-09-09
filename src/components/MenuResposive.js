import { useState } from "react";
import Palette from "./Palette";
import Menu from "../assets/svg/Menu";

const MenuResponsive = ({ currentLang }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const style = {
        menu: "flex items-center justify-center text-3xl font-bold py-2 w-[40px] h-[40px] rounded-md z-10 hover:border rounded",
        content: `fixed top-0 right-0 z-10 transform ${isOpen ? 'translate-x-0 w-fit' : 'translate-x-full'} transition-transform duration-700 ease-in-out h-screen flex flex-col items-end justify-start shadow-lg`,
        btn: "text-3xl rounded-md w-10 h-10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-100",
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section>
            <button 
                className={style.menu}
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <Menu color={Palette.HighlightColor} />
            </button>
            <div 
                className={style.content} 
                style={{ backgroundColor: Palette.primaryColor }}
            >
                <div 
                    className="h-full flex flex-col items-center justify-between p-4"
                    style={{ backgroundColor: Palette.backgroundColor }}
                >
                    <div 
                        className="border-b w-full flex items-center justify-center p-2"
                    >
                        <button 
                            className={style.btn} 
                            onClick={toggleMenu}
                            aria-label="Close menu"
                        >
                            x
                        </button>
                    </div>
                    <div className="w-full h-full mt-10 flex flex-col items-center">
                        {
                            currentLang.map(n => (
                                <h3  className="text-md w-full text-center px-2 m-1 rounded bg-gray-100 hover:bg-gray-300 active:bg-gray-700 border" >
                                    <button 
                                        key={n.slug} 
                                        aria-label="Close menu"
                                        className="text-center font-bold  py-2 px-0 uppercase outline-none rounded-md"
                                        style={{ color: Palette.HighlightColor }}
                                        onClick={() => {
                                            scrollToSection(n.slug);
                                            toggleMenu()
                                        }}
                                    >
                                        {n.title}
                                    </button>
                                </h3>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuResponsive;
