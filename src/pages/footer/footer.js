import "./footer.css"

import GitHubIcon from "../../assets/svg/SocialMedia/Github.svg"
import InstagramIcon from "../../assets/svg/SocialMedia/Instagram.svg"
import LinkedinIcon from "../../assets/svg/SocialMedia/Linkedin.svg"
import WhatsappIcon from "../../assets/svg/SocialMedia/Whatsapp.svg"

const social = [
    {
        "img": GitHubIcon,
        "link": "https://github.com/elkhattaby0"
    },
    {
        "img": InstagramIcon,
        "link": "https://www.instagram.com/lahoucine_elkhattaby"
    },
    {
        "img": LinkedinIcon,
        "link": "https://www.linkedin.com/in/lahoucine-el-khattaby-0335341bb"
    },
    {
        "img": WhatsappIcon,
        "link": "+(212) 6 50 99 99 53"
    },
]

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <div>
            {
                social.map(n=> (                    
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href={n.link}>
                        <img src={n.img} />
                    </a>                    
                ))
            }
            </div>
            <p>© Copyright 2024, All rights reserved. Made With Lahoucine EL KHATTABY.</p>
        </div>
    )
}

export default Footer;