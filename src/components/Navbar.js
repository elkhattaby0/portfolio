import { Link, Outlet, useLocation } from "react-router-dom";
import Columns from "./ui/Columns";
import ParagraphFive from "./ui/Paragraph/ParagraphFive";
import ParagraphSix from "./ui/Paragraph/ParagraphSix";
import MenuResposive from "./MenuResposive";
import Logo from "./ui/Logo";
import Palette from "./Palette";
import { useState } from "react";

const Navbar = () => {
    const [activePath, setActivePath] = useState('/'); // Default path
    const location = useLocation();

    const uicss = {
        "fullcontainer": "w-full flex flex-col justify- items-center",
        "container": "flex w-10/12 justify-between items-center",
        "logo": "uppercase py-4",
    };

    const getLinkClass = (path) => {
        return `uppercase py-2 px-2  ${activePath === path ? "border-b-4 border-[#3A86FF] w-1/2 mx-auto " : ""}`;
    };

    return (
        <div className={uicss.fullcontainer} style={{ backgroundColor: Palette.backgroundColor }}>
            <div className="sticky top-0 z-10 shadowe-md w-full bg-red-500 flex justify-center">
                <h1
                    className="text-xl max-md:text-sm py-1"
                    style={{ color: Palette.primaryColor }}
                >&#x26A0; Website still under development &#x26A0;</h1>
            </div>
            <div
                className="w-full flex justify-center"
                style={{ backgroundColor: Palette.primaryColor }}
            >
                <div className={uicss.container}>
                    <Columns>
                        <ParagraphFive uicss={uicss.logo}>
                            <Link to="/">
                                <Logo
                                    logo={Palette.HighlightColor}
                                    bk='none'
                                    w="20px"
                                />
                            </Link>
                        </ParagraphFive>
                    </Columns>
                    <Columns nbr={5} uicss="max-md:hidden">
                        <ParagraphSix uicss={getLinkClass('/')} stl={Palette.HighlightColor}>
                            <Link to='/' onClick={() => setActivePath('/')}>Home</Link>
                        </ParagraphSix>
                        <ParagraphSix uicss={getLinkClass('/projects')} stl={Palette.HighlightColor}>
                            <Link to='/projects' onClick={() => setActivePath('/projects')}>Projects</Link>
                        </ParagraphSix>
                        <ParagraphSix uicss={getLinkClass('/services')} stl={Palette.HighlightColor}>
                            <Link to='/services' onClick={() => setActivePath('/services')}>Services</Link>
                        </ParagraphSix>
                        <ParagraphSix uicss={getLinkClass('/contact')} stl={Palette.HighlightColor}>
                            <Link to='/contact' onClick={() => setActivePath('/contact')}>Contact</Link>
                        </ParagraphSix>
                        <ParagraphSix uicss={getLinkClass('/about')} stl={Palette.HighlightColor}>
                            <Link to='/about' onClick={() => setActivePath('/about')}>
                                About
                            </Link>
                        </ParagraphSix>
                    </Columns>
                    <Columns uicss={"hidden max-md:flex"} stl={Palette.HighlightColor}>
                        <MenuResposive />
                    </Columns>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;
