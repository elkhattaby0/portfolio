import Palette from "./Palette";
import Facebook from "../assets/svg/SocialMedia/Facebook";
import Linkedin from "../assets/svg/SocialMedia/Linkedin";
import Github from "../assets/svg/SocialMedia/Github";
import Instagram from "../assets/svg/SocialMedia/Instagram";

const SocialMedia = ({currentLang}) => {
    const Social = ({ currentLang }) => {
        const data = currentLang.socialmedia
        return (
            <>
                <a //Linkedin
                    href={data.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center texet-center h-9 w-9 mx-2  rounded-xl hover:shadow-md hover:rounded-full cursor-pointer"
                    style={{backgroundColor: Palette.accentColor}}
                >
                        <Linkedin 
                            color={Palette.primaryColor} 
                        />
                </a>
                <a //Github
                    href={data.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center texet-center h-9 w-9 mx-2  rounded-xl hover:shadow-md hover:rounded-full cursor-pointer"
                    style={{backgroundColor: Palette.accentColor}}
                >
                        <Github 
                            color={Palette.primaryColor} 
                        />
                </a>
                <a //Instagram
                    href={data.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center texet-center h-9 w-9 mx-2  rounded-xl hover:shadow-md hover:rounded-full cursor-pointer"
                    style={{backgroundColor: Palette.accentColor}}
                >
                        <Instagram 
                            color={Palette.primaryColor} 
                        />
                </a>
                <a //Facebok
                    href={data.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-9 w-9 mx-2  rounded-xl hover:shadow-md hover:rounded-full cursor-pointer"
                    style={{backgroundColor: Palette.accentColor}}
                >
                        <Facebook 
                            color={Palette.primaryColor} 
                        />
                    </a>
            </>
        )
    }

    return (
        <div className="flex justify-center max-md:justify-start ">
            {
            <Social currentLang={currentLang} />
            }                    
        </div>
    )
}

export default SocialMedia;