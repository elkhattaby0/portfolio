import "./hero.css";

import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
const sizeIcon = 25;
const colorIcon = "#EFFFFB"
const social = [
    {
        "img": <SiGithub size={sizeIcon} color={colorIcon} />,
        "link": "https://github.com/elkhattaby0"
    },
    {
        "img": <SiInstagram size={sizeIcon} color={colorIcon} />,
        "link": "https://www.instagram.com/lahoucine_elkhattaby"
    },
    {
        "img": <SiLinkedin size={sizeIcon} color={colorIcon} />,
        "link": "https://www.linkedin.com/in/lahoucine-el-khattaby-0335341bb"
    },
    {
        "img": <SiWhatsapp size={sizeIcon} color={colorIcon} />,
        "link": "https://wa.me/212650999953"
    },
]

const Hero = () => {
    return <div className="hero" id="about">
        <h1>&#10024; Introduction.</h1>
        <h2><span>Hi,</span>
            <br/>
            I'm Lahoucine.</h2>
        <p>
            I'm a Junior <span>Full Stack Developer</span> skilled in front-end and back-end development. I want to learn and improve my skills. I enjoy working on projects that challenge me and help me grow in my career.
        </p><br/>
        <div>
            {
                social.map(n=>(
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href={n.link}>
                        {n.img}
                    </a>     
                ))
            }
        </div>
    </div>
}

export default Hero;