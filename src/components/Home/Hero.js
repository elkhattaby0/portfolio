import Image from "../ui/Image";
import Button from "../ui/Button";
import Palette from "../Palette";
import { Typewriter } from 'react-simple-typewriter'


const Hero = ({currentLang}) => {
    const uicss = {
        "container":"h-screen w-10/12 flex max-md:flex-col max-md:flex-col-reverse justify-between max-md:justify-center items-center",
        "para": "self-start my-2",
    }
    return (
        <section className={uicss.container} style={{backgroundColor: Palette.backgroundColor}}>
            <div 
                className="flex flex-col text-left justify-center w-1/2 max-md:w-full h-full max-md:h-fit"
            >
                <h1 className={`font-bold text-6xl max-md:text-4xl w-full ${uicss.para}`} style={{color:Palette.HighlightColor}}>
                    {currentLang.headtitle}
                </h1>
                <h3 className={`text-4xl max-md:text-2xl w-full ${uicss.para}`} style={{color:Palette.primaryColor}}>
                    <Typewriter
                        words={currentLang.specialty}
                        loop="false"
                    />
                </h3>
                <p className={`text-xl w-full ${uicss.para}`} style={{color:Palette.secondaryColor}}>{currentLang.text}</p>
                <Button 
                    link={currentLang.btn.slug} uicss="self-start"
                    stl={Palette.backgroundColor}    
                >{currentLang.btn.text}</Button>
            </div>
            <div
                className="w-1/2 h-full max-md:w-full max-md:h-fit flex items-center justify-end max-md:justify-center max-md:items-end"
            >
                <div 
                    className="relative w-96 h-[70%] max-md:w-60 max-md:mb-2 max-md:h-60 rounded-full overflow-hidden border "
                    style={{backgroundColor: Palette.HighlightColor}}
                >
                    <Image
                        url="profile.png"
                        w="100%"
                        mix="mix-blend-normal absolute -left-[20px] max-md:-left-[5px] top-[20px] object-cover -rotate-[9deg]"
                    />
                </div>
            </div>
            
        </section>
    )
}

export default Hero;