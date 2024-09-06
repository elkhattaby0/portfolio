import { Link, Outlet, useLocation } from "react-router-dom";
import MenuResposive from "./MenuResposive";
import Logo from "../assets/svg/Logo";
import Palette from "./Palette";
import { useEffect, useState } from "react";

const Navbar = ({currentLang, switchLang}) => {
    const [isVisible, setIsVisible] = useState(0);
    const [activePath, setActivePath] = useState('/');
    const location = useLocation();
    
    setInterval(()=> {
        setIsVisible(window.scrollY)
    })

    const uicss = {
        "fullcontainer": "w-full flex flex-col justify- items-center",
        "container": "w-10/12 flex justify-between items-center",
        "logo": "uppercase py-4",
    };

    const getLinkClass = (path) => {
        return `text-center font-bold uppercase py-2 px  ${activePath === path ? "border-b-4 border-[#3A86FF]" : ""}`;
    };

    return (
        <div className={uicss.fullcontainer} style={{ backgroundColor: Palette.backgroundColor }}>
            <section
                className={`fixed top-0 z-10 w-full  flex justify-center ${isVisible >10 ? "border-b" : ""}`}
                style={isVisible ? 
                    { backgroundColor: Palette.backgroundColor } : 
                    {backgroundColor: "none"}
                }
            >
                <div className={uicss.container}>
                    <div>
                        <h1 className={uicss.logo}>
                            <Link to="/">
                                <Logo
                                    logo={Palette.HighlightColor}
                                    bk='none'
                                    w="20px"
                                />
                            </Link>
                        </h1>
                    </div>
                    {/* Desktop */}
                    <div className="max-md:hidden columns-5" >
                        {
                            currentLang.map(n=> (
                                <h3 className={getLinkClass(n.slug)} style={{color:Palette.HighlightColor}}>
                                    <Link to={n.slug} onClick={() => setActivePath(n.slug)}>{n.title}</Link>
                                </h3>
                            ))
                        }
                    </div>
                    {/* Smartphone */}
                    <div className="hidden max-md:flex rounded" style={{backgroundColor:Palette.HighlightColor}}>
                        <MenuResposive />
                    </div>
                </div>
            </section>
            <Outlet />
        </div>
    );
};

export default Navbar;
