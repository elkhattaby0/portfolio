import Columns from "../ui/Columns";
import ParagraphOne from "../ui/Paragraph/ParagraphOne";
import ParagraphFive from "../ui/Paragraph/ParagraphFive";
import Text from "../ui/Text";
import Space from "../ui/Space";
import Image from "../ui/Image";
import Button from "../ui/Button";
import Palette from "../Palette";

const Hero = () => {
    const uicss = {
        "container":"w-10/12 flex justify-between h-[89vh]",
        "para": "self-start",
    }
    return (
        <div 
            className="flex justify-center"
            style={{background: Palette.primaryColor}}
        >
            <div className={uicss.container} >
                <Columns uicss="flex flex-col items-start justify-center w-1/2 max-md:w-full">
                    <ParagraphOne uicss={uicss.para} stl={Palette.HighlightColor}>
                        Hi, I'm Lahoucine.
                    </ParagraphOne>
                    <Space />
                    <ParagraphFive uicss={uicss.para} stl={Palette.accentColor}>
                        Full Stack Developer | MERN Stack | WordPress | Laravel
                    </ParagraphFive>
                    <Space />
                    <Text uicss={uicss.para} stl={Palette.secondaryColor}>
                        I build responsive, user-friendly and applications with a focus on performance and desgin. Let's bring your ideas to life. 
                    </Text>
                    <Space />
                    <Button link="projects" uicss="self-start">Explore My Work</Button>
                </Columns>
                <Columns uicss="w-1/2 flex justify-end max-md:hidden" >
                    <Image url="man.jpg" w="85%" alt="man" mix="mix-blend-multiply"/>
                </Columns>
            </div>
        </div>
    )
}

export default Hero;