import { useEffect, useState } from "react";
import MenuResposive from "./MenuResposive";
import Logo from "../assets/svg/Logo";
import Palette from "./Palette";

const Navbar = ({ currentLang, switchLang }) => {
    const [isVisible, setIsVisible] = useState(0);
    const [activeItem, setActiveItem] = useState(currentLang[0]?.slug || "");

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveItem(id); 
        }
    };

    const uicss = {
        fullcontainer: "w-full flex flex-col justify-items-center",
        container: "w-10/12 flex justify-between items-center",
        logo: "uppercase py-4 outline-none",
    };

    return (
        <div className={uicss.fullcontainer}>
            <section className={`w-full flex justify-center ${isVisible > 10 ? "fixed top-0 z-10 border-b" : ""}`} style={isVisible ? { backgroundColor: Palette.backgroundColor } : { backgroundColor: Palette.primaryColor }}>
                <div className={uicss.container}>
                    <div>
                        <button className={uicss.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Logo logo={Palette.HighlightColor} bk='none' w="20px" />
                        </button>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="max-md:hidden flex">
                        {currentLang.map(n => (
                            <h3 key={n.slug} className="text-md px-1 m-1 rounded ">
                                <button
                                    className="text-center font-semibold py-2 px-0 capitalize outline-none rounded-md"
                                    style={{ color: activeItem === n.slug ? Palette.HighlightColor : Palette.secondaryColor }}
                                    onClick={() => scrollToSection(n.slug)}
                                >
                                    {n.title}
                                </button>
                            </h3>
                        ))}
                    </div>

                    {/* Smartphone Navigation */}
                    <div className="hidden max-md:flex rounded">
                        <MenuResposive currentLang={currentLang} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;
