import SocialMedia from "./SocialMedia"
import Columns from "./ui/Columns"
import Container from "./ui/Container"
import Image from "./ui/Image"
import ParagraphFive from "./ui/Paragraph/ParagraphFive"
import ParagraphSix from "./ui/Paragraph/ParagraphSix"
import Separate from "./ui/Separate"
import Space from "./ui/Space"
import Text from "./ui/Text"
import { Link } from "react-router-dom"



const Footer = () => {
    const uicss = {
        "fullcontainer": "w-full h-fit max-md:h-fit flex flex-col justify-between items-center pt-8 pb-4 bg-[#0D0C22]  ",
        "container": "w-1/2 max-md:w-10/12 mx-4 my-8 mb-20",
        "link": "text-gray-400 hover:text-[#f8f7f4] text-center max-md:text-left"
    }

    return (
        <div className={uicss.fullcontainer}>

            <div className={uicss.container}>
                <ParagraphFive uicss="uppercase py-4 text-center max-md:text-left text-[#f8f7f4]">
                    Keep In Touch.
                </ParagraphFive>
                <Space />
                <Text uicss="text-gray-400 text-sm text-center max-md:text-left">
                    Full Stack Developer specializing in MERN Stack, WordPress, Laravel, and creating high-performance applications.
                </Text>
                <Space />
                <SocialMedia />
                
            </div>  
            
            <div className="w-10/12 mx-4">
                <Text uicss="w-full text-white text-sm max-md:text-[3vw] p- text-center max-md:text-left">
                &copy; {new Date().getFullYear()} <i>Lahoucine EL KHATTABY</i>, All rights reserved.
                </Text>
            </div>
        </div>
    )
}

export default Footer