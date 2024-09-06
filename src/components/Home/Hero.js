import Image from "../ui/Image";
import Button from "../ui/Button";
import Palette from "../Palette";
import { Typewriter } from 'react-simple-typewriter'


const Hero = ({currentLang}) => {
    const uicss = {
        "container":"h-screen w-10/12 flex justify-between items-center",
        "para": "self-center max-md:self-start",
    }
    return (
        <section className={uicss.container} style={{backgroundColor: Palette.backgroundColor}}>
            <div 
                className="flex flex-col text-center max-md:text-left justify-center w-full h-full"
                >
                <h1 className={`font-bold text-6xl w-full ${uicss.para}`} style={{color:Palette.HighlightColor}}>
                    <Typewriter
                        words={currentLang.headtitle}
                    />
                </h1>
                <br />
                <h3 className={`text-4xl w-full ${uicss.para}`} style={{color:Palette.primaryColor}}>
                    <Typewriter
                        words={currentLang.specialty}
                        loop="false"
                    />
                </h3>
                <br />
                <p className={`text-xl w-1/2 max-md:w-full ${uicss.para}`} style={{color:Palette.secondaryColor}}>{currentLang.text}</p>
                <br />
                <Button 
                    link={currentLang.btn.slug} uicss="self-center max-md:self-start"
                    stl={Palette.backgroundColor}    
                >{currentLang.btn.text}</Button>
            </div>
            
        </section>
    )
}

export default Hero;