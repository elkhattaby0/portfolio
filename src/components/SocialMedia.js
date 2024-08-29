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
                    <div className="flex items-center justify-center bg-gray-400 hover:bg-[#f8f7f4] hover:rounded-full rounded w-34 p-2 m-2 cursor-pointer">
                        <Image 
                            url={n.img} 
                            alt={n.name} 
                            w="25px" 
                        />
                    </div>
                ))
            }                    
        </div>
    )
}

export default SocialMedia;