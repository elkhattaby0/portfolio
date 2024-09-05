import Space from "../ui/Space";
import Image from "../ui/Image";
import Button from "../ui/Button";
import Palette from "../Palette";

const Hero = () => {
    const uicss = {
        "container":"w-full flex justify-between h-[92vh]",
        "para": "self-start",
    }
    return (
        <section className={uicss.container} style={{backgroundColor: Palette.primaryColor}}>
            <div 
                // className="flex flex-col items-start justify-center w-full max-md:w-full"
                className="flex flex-col text-center justify-center w-full"
                >
                <h1 className={`font-bold text-6xl w-full ${uicss.para}`} style={{color:Palette.HighlightColor}}>
                    Hi, I'm Lahoucine.
                </h1>
                <Space />
                <h3 className={`text-3xl w-full ${uicss.para}`} style={{color:Palette.accentColor}}>
                    Full Stack Developer | MERN Stack | WordPress | Laravel
                </h3>
                <Space />
                <p className={`text-xl w-full ${uicss.para}`} style={{color:Palette.secondaryColor}}>
                    I build responsive, user-friendly and applications with a focus on performance and desgin. Let's bring your ideas to life. 
                </p>
                <Space />
                <Button 
                    link="projects" uicss="self-center"
                    stl={Palette.backgroundColor}    
                >Explore My Work</Button>
            </div>
            
        </section>
    )
}

export default Hero;