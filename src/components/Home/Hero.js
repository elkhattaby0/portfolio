import Space from "../ui/Space";
import Image from "../ui/Image";
import Button from "../ui/Button";
import Palette from "../Palette";
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
    const uicss = {
        "container":"w-10/12 flex justify-between h-screen",
        "para": "self-start",
    }
    return (
        <section className={uicss.container} style={{backgroundColor: Palette.backgroundColor}}>
            <div 
                className="flex flex-col text-center max-md:text-left justify-center w-full"
                >
                <h1 className={`font-bold text-6xl w-full ${uicss.para}`} style={{color:Palette.HighlightColor}}>
                     
                <Typewriter
                    words={["Hi, I'm Lahoucine."]}
                />
                </h1>
                <Space />
                <h3 className={`text-3xl w-full ${uicss.para}`} style={{color:Palette.primaryColor}}>
                    {/* Full Stack Developer | MERN Stack | WordPress | Laravel */}
                    <Typewriter
                        words={
                            ["Full Stack Developer", 
                                "MERN Stack",
                                "WordPress",
                                "Laravel"
                            ]
                        }
                        loop="false"
                    />
                </h3>
                <Space />
                <p className={`text-xl w-full ${uicss.para}`} style={{color:Palette.secondaryColor}}>
                    I build responsive, user-friendly and applications with a focus on performance and desgin. Let's bring your ideas to life. 
                </p>
                <Space />
                <Button 
                    link="projects" uicss="self-center max-md:self-start"
                    stl={Palette.backgroundColor}    
                >Explore My Work</Button>
            </div>
            
        </section>
    )
}

export default Hero;