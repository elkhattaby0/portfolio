import { Link } from "react-router-dom"
import ParagraphFive from "./ui/Paragraph/ParagraphFive"
import Image from "./ui/Image"
import SocialMedia from "./SocialMedia"

const MenuResposive = () => {
    
    const style = {
        "menu": "flex items-center justify-center text-[#0D0C22] text-3xl font-bold py-2 w-[40px] h-[40px] hover:text-[#f8f7f4] hover:bg-[#0D0C22] rounded-md z-0 hover:shadow-md",
        
        "content": "hidden absolute z-1 bg-gray w-full h-screen left-0 top-0 flex flex-col items-end justify-start bg-[#0D0C22] ",
        "btn": "text-3xl text-red-600 hover:text-[#f8f7f4] rounded-md  w-10 h-10 hover:bg-red-600 hover:shadow-md",
        "link": "w-10/12 text-xl my-2 hover:underline hover:text-2xl"
    }

    return (
        <div>
            <button 
                className={style.menu}
                onClick={()=> {
                    document.getElementById("menuContent").style.display = "flex"
            }}
            >&#9776;</button>
            <div className={style.content} id="menuContent">
                <div className=" h-full flex flex-col items-center justify-between border w-10/12 shadow-xl bg-[#f8f7f4]">
                    <div className="border-b w-10/12 flex items-center justify-between">
                        <ParagraphFive uicss="uppercase py-4 text-[#0D0C22]">
                            <Link to="/" onClick={()=> {
                        document.getElementById("menuContent").style.display = "none"
                    }}> 
                                <Image url="logo_2.png" w="20px" />
                            </Link>
                        </ParagraphFive>
                        <button 
                            className={style.btn}
                            onClick={()=> {
                            document.getElementById("menuContent").style.display = "none"
                        }}>x</button>
                    </div>
                    <div className="w-10/12 h-full mt-10">
                        <ParagraphFive uicss={style.link}>
                            <Link to="/" onClick={()=> {
                            document.getElementById("menuContent").style.display = "none"
                        }}>Home</Link>
                        </ParagraphFive>
                        <ParagraphFive uicss={style.link}>
                            <Link to="/projects" onClick={()=> {
                            document.getElementById("menuContent").style.display = "none"
                        }}>Projects</Link>
                        </ParagraphFive>
                        <ParagraphFive uicss={style.link}>
                            <Link to="/services" onClick={()=> {
                            document.getElementById("menuContent").style.display = "none"
                        }}>Services</Link>
                        </ParagraphFive>
                        <ParagraphFive uicss={style.link}>
                            <Link to="/contact" onClick={()=> {
                            document.getElementById("menuContent").style.display = "none"
                        }}>Contact</Link>
                        </ParagraphFive>
                        <ParagraphFive uicss={style.link}>
                            <Link to="/about" onClick={()=> {
                            document.getElementById("menuContent").style.display = "none"
                        }}>About</Link>
                        </ParagraphFive>
                    </div>
                    <div className="w-full bg-[#0D0C22] flex justify-center">
                        <div className="w-10/12">
                            <SocialMedia />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MenuResposive;