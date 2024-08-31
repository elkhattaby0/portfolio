import Palette from "./Palette";
import Image from "./ui/Image";

const SocialMedia = () => {
    
    const Social = [
        {"name": "Facebook", "img": "facebook.png"},
        {"name": "Instagram", "img": "instagram.png"},
        {"name": "Linkedin", "img": "linkedin.png"},
        {"name": "X", "img": "twitter.png"},
        {"name": "Github", "img": "github.png"},
    ]

    return (
        <div className="flex justify-center max-md:justify-start ">
            {
                Social.map(n=> (
                    <div 
                        className="flex items-center justify-center shadow-md hover:rounded-full rounded w-34 p-2 m-2 cursor-pointer"
                        style={{backgroundColor: Palette.accentColor}}
                        >
                        <Image 
                            url={n.img} 
                            alt={n.name} 
                            w="25px" 
                            mix="mix-blend-multiplay"
                        />
                    </div>
                ))
            }                    
        </div>
    )
}

export default SocialMedia;