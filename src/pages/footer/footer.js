import "./footer.css"
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

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <h2>Keep In Touch.</h2>
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
            <p>© Copyright 2024, All rights reserved. Made With Lahoucine EL KHATTABY.</p>
        </div>
    )
}

export default Footer;