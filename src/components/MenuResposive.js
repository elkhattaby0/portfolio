import { Link } from "react-router-dom"
import ParagraphFive from "./ui/Paragraph/ParagraphFive"

const MenuResposive = () => {
    
    const style = {
        "menu": "flex items-center justify-center text-[#0D0C22] text-3xl font-bold py-2 w-[40px] h-[40px] hover:border-2 hover:border-[#0D0C22] rounded-full z-0",
        
        "content": "hidden absolute z-1 bg-gray w-full h-screen left-0 top-0 flex flex-col items-center justify-center bg-[#f8f7f4]",
        "btn": "text-4xl text-red-600 absolute right-4 top-1 hover:border-2 hover:border-[#0D0C22] rounded-full p- h-[35px] w-[35px] flex items-center justify-center" 
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

                <button 
                    className={style.btn}
                    onClick={()=> {
                    document.getElementById("menuContent").style.display = "none"
                }}>x</button>
                <ParagraphFive uicss="hover:border-b-2 border-[#0D0C22] p-2">
                    <Link to="/" onClick={()=> {
                    document.getElementById("menuContent").style.display = "none"
                }}>Home</Link>
                </ParagraphFive>
                <ParagraphFive uicss="hover:border-b-2 border-[#0D0C22] p-2">
                    <Link to="/projects" onClick={()=> {
                    document.getElementById("menuContent").style.display = "none"
                }}>Projects</Link>
                </ParagraphFive>
                <ParagraphFive uicss="hover:border-b-2 border-[#0D0C22] p-2">
                    <Link to="/services" onClick={()=> {
                    document.getElementById("menuContent").style.display = "none"
                }}>Services</Link>
                </ParagraphFive>
                <ParagraphFive uicss="hover:border-b-2 border-[#0D0C22] p-2">
                    <Link to="/contact" onClick={()=> {
                    document.getElementById("menuContent").style.display = "none"
                }}>Contact</Link>
                </ParagraphFive>
                <ParagraphFive uicss="hover:border-b-2 border-[#0D0C22] p-2">
                    <Link to="/about" onClick={()=> {
                    document.getElementById("menuContent").style.display = "none"
                }}>About</Link>
                </ParagraphFive>
            </div>
        </div>
    )

}

export default MenuResposive;