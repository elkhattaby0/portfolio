import Image from "../ui/Image";
import Button from "../ui/Button";
import Palette from "../Palette";
import { Typewriter } from 'react-simple-typewriter'
import Wave from "../../assets/svg/Wave";


const Hero = ({currentLang}) => {
    const uicss = {
        "container":"h-[90vh] max-md:h-fit w-10/12 flex max-md:flex-col max-md:flex-col-reverse justify-between max-md:justify-end items-center max-md:h-fit max-md:py-8",
        "para": "self-start my-2",
    }
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <>
        <div className="w-full flex justify-center" style={{background: Palette.primaryColor}}>
        <section id="home" className={uicss.container} >
            <div                 
                className="flex flex-col text-left justify-center w-1/2 max-md:w-full h-fit max-md:mt-4" 
            >
                <h1 
                    className={`font-semibold text-5xl max-md:text-3xl max-md:text-center w-full ${uicss.para}`} style={{color:Palette.backgroundColor}}
                    dangerouslySetInnerHTML={{ __html: currentLang.headtitle}} />
                <h3 className={`font-semibold text-4xl max-md:text-2xl max-md:text-center w-full ${uicss.para}`} style={{color:Palette.HighlightColor}}>
                    <Typewriter
                        words={currentLang.specialty}
                        loop="false"
                    />
                </h3>                
                <p className={`w-full font-normal ${uicss.para}`} style={{color:Palette.primaryColor}}>{currentLang.text}</p>
                <p className="max-md:text-center" onClick={()=> scrollToSection('contact')}><Button 
                    uicss="self-start my-2 shadow font-normal"
                    stl={Palette.backgroundColor}    
                >{currentLang.btn.text}</Button></p>
            </div>
            <div
                className="w-1/2 h-full max-md:w-full max-md:h-fit flex items-center justify-end max-md:justify-center max-md:items-end"
            >
                <div 
                    className="relative w-96 h-[450px] max-md:w-60 max-md:mb-2 max-md:h-80 rounded-full overflow-hidden"
                    style={{ background: Palette.HighlightColor }}
                    
                >
                    <Image
                        url="webp/profile.webp"
                        w="100%"
                        mix="mix-blend-normal absolute -left-[20px] max-md:-left-[5px] top-[20px] object-cover -rotate-[9deg]"
                    />
                </div>
            </div>
            
        </section>
        </div>
        <div className="w-full">
            <Wave color={Palette.primaryColor} />
        </div>        
    </>
    )
}

export default Hero;