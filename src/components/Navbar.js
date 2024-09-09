import { useEffect, useState } from "react";
import MenuResposive from "./MenuResposive";
import Logo from "../assets/svg/Logo";
import Palette from "./Palette";

const Navbar = ({ currentLang, switchLang }) => {
    const [isVisible, setIsVisible] = useState(0);

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
        }
    };

    const uicss = {
        fullcontainer: "w-full flex flex-col justify- items-center",
        container: "w-10/12 flex justify-between items-center",
        logo: "uppercase py-4  outline-none",
    };

    return (
        <div className={uicss.fullcontainer} style={{ backgroundColor: Palette.backgroundColor }}>
            <section className={`w-full flex justify-center ${isVisible > 10 ? "fixed top-0 z-10 border-b" : ""}`} style={isVisible ? { backgroundColor: Palette.backgroundColor } : { backgroundColor: "none" }}>
                <div className={uicss.container}>
                    <div>
                        <button className={uicss.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Logo logo={Palette.HighlightColor} bk='none' w="20px" />
                        </button>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="max-md:hidden flex">
                        {
                            currentLang.map(n => (
                                <h3  className="text-md px-2" >
                                    <button key={n.slug} className="text-center font-bold  py-2 px-0 uppercase outline-none" style={{ color: Palette.HighlightColor }} onClick={() => scrollToSection(n.slug)}>{n.title}</button>
                                </h3>
                            ))
                        }
                    </div>
                    {/* Smartphone Navigation */}
                    <div className="hidden max-md:flex rounded">
                        <MenuResposive currentLang={currentLang}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;
