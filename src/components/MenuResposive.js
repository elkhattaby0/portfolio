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
        menu: "flex items-center justify-center text-[#0D0C22] text-3xl font-bold py-2 w-[40px] h-[40px] hover:text-[#f8f7f4] hover:bg-[#0D0C22] rounded-md z-0 hover:shadow-md",
        content: `fixed inset-0 z-10 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700 ease-in-out w-full h-screen flex flex-col items-end justify-start bg-[#0D0C22] `,
        btn: "text-3xl text-red-600 hover:text-[#f8f7f4] rounded-md w-10 h-10 hover:bg-red-600 hover:shadow-md ",
        link: "w-10/12 text-xl my-2 hover:underline hover:text-2xl",
    };

    return (
        <div>
            <button className={style.menu} onClick={toggleMenu}>
                &#9776;
            </button>
            <div className={style.content}>
                
                <div className={`h-full flex flex-col items-center justify-between border w-10/12 shadow-xl bg-[#f8f7f4] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-1000 ease-in-out`}>
                    <div className="border-b w-10/12 flex items-center justify-between">
                        <ParagraphFive uicss="uppercase py-4 text-[#0D0C22]">
                            <Link to="/" onClick={toggleMenu}>
                                <Logo
                                    logo={Palette.darkColor}
                                    bk={Palette.lightColor}
                                    w="20px"
                                />
                            </Link>
                        </ParagraphFive>
                        <button className={style.btn} onClick={toggleMenu}>
                            x
                        </button>
                    </div>
                    <div className="w-10/12 h-full mt-10">
                        {['Home', 'Projects', 'Services', 'Contact', 'About'].map((item, index) => (
                            <ParagraphFive key={index} uicss={style.link}>
                                <Link to={`/${item.toLowerCase()}`} onClick={toggleMenu}>
                                    {item}
                                </Link>
                            </ParagraphFive>
                        ))}
                    </div>
                    <div className="w-full bg-[#0D0C22] flex justify-center">
                        <div className="w-10/12 py-4 flex flex-col justify-center items-center">
                            <p className="text-[#f8f7f4] text-xl text-semibold  text-center ml-2 my-">Follow me</p>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuResposive;
