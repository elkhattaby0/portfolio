import Palette from "./Palette"
import SocialMedia from "./SocialMedia"
import ParagraphFive from "./ui/Paragraph/ParagraphFive"
import Space from "./ui/Space"
import Text from "./ui/Text"



const Footer = () => {
    const uicss = {
        "fullcontainer": "w-full h-fit max-md:h-fit flex flex-col justify-between items-center pt-8 pb-4",
        "container": "w-1/2 max-md:w-10/12 mx-4 my-8 mb-20",
        "link": "text-gray-400 hover:text-[#f8f7f4] text-center max-md:text-left"
    }

    return (
        <section 
            className={uicss.fullcontainer}
            style={{backgroundColor: Palette.primaryColor}}    
        >

            <div className={uicss.container}>
                <h1 
                    className="font-bold text-center my-10 text-3xl"
                    style={{color:Palette.backgroundColor}}   
                >
                    Keep In Touch.
                </h1>
                <br/>
                <p 
                    className="text-xl text-center max-md:text-left"
                    style={{color:Palette.accentColor}}    
                >
                    Full Stack Developer specializing in MERN Stack, WordPress, Laravel, and creating high-performance applications.
                </p>
                <br />
                <SocialMedia />
                
            </div>  
            
            <div className="w-10/12 mx-4">
                <p 
                    className="w-full text-white text-md max-md:text-[3vw] p- text-center max-md:text-left"
                    style={{color:Palette.accentColor}}    
                >
                &copy; {new Date().getFullYear()} <i>Lahoucine EL KHATTABY</i>, All rights reserved.
                </p>
            </div>
        </section>
    )
}

export default Footer