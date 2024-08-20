import Columns from "../ui/Columns";
import ParagraphOne from "../ui/Paragraph/ParagraphOne";
import ParagraphFive from "../ui/Paragraph/ParagraphFive";
import Text from "../ui/Text";
import Space from "../ui/Space";
import Image from "../ui/Image";
import Button from "../ui/Button";

const Hero = () => {
    const uicss = {
        "container": "w-10/12 flex justify-between h-[89vh]",
        "para": "self-start text-[#0D0C22]",
    }
    return (
        <div className={uicss.container}>
            <Columns uicss="flex flex-col items-start justify-center w-1/2 max-md:w-full">
                <ParagraphOne uicss={uicss.para}>
                    Hi, I'm Lahoucine.
                </ParagraphOne>
                <Space />
                <ParagraphFive uicss={uicss.para}>
                    Full Stack Developer | MERN Stack | WordPress | Laravel
                </ParagraphFive>
                <Space />
                <Text uicss={uicss.para}>
                    I build responsive, user-friendly and applications with a focus on performance and desgin. Let's bring your ideas to life. 
                </Text>
                <Space />
                <Button link="projects" uicss="self-start">Explore My Work</Button>
            </Columns>
            <Columns uicss="w-1/2 flex justify-end max-md:hidden" >
                <Image url="man.jpg" w="85%" alt="man" mix="multiply" />
            </Columns>
        </div>
    )
}

export default Hero;