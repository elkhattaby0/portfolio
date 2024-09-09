import Palette from "./Palette";
import Image from "./ui/Image";

const SocialMedia = ({currentLang}) => {

    return (
        <div className="flex justify-center max-md:justify-start ">
            {
                currentLang.socialmedia.map(n=> (
                    <a
                        href={n.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center shadow-md hover:rounded-full rounded w-34 p-2 m-2 cursor-pointer"
                        style={{backgroundColor: Palette.accentColor}}
                        >
                        <Image 
                            url={n.img} 
                            alt={n.name} 
                            w="25px" 
                            mix="mix-blend-multiplay"
                        />
                    </a>
                ))
            }                    
        </div>
    )
}

export default SocialMedia;