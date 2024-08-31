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
        <div 
            className={uicss.fullcontainer}
            style={{backgroundColor: Palette.primaryColor}}    
        >

            <div className={uicss.container}>
                <ParagraphFive 
                    uicss="uppercase py-4 text-center max-md:text-left"
                    stl={Palette.HighlightColor}    
                >
                    Keep In Touch.
                </ParagraphFive>
                <Space />
                <Text 
                    uicss="text-sm text-center max-md:text-left"
                    stl={Palette.accentColor}    
                >
                    Full Stack Developer specializing in MERN Stack, WordPress, Laravel, and creating high-performance applications.
                </Text>
                <Space />
                <SocialMedia />
                
            </div>  
            
            <div className="w-10/12 mx-4">
                <Text 
                    uicss="w-full text-white text-sm max-md:text-[3vw] p- text-center max-md:text-left"
                    stl={Palette.accentColor}    
                >
                &copy; {new Date().getFullYear()} <i>Lahoucine EL KHATTABY</i>, All rights reserved.
                </Text>
            </div>
        </div>
    )
}

export default Footer