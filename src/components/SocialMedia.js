import Palette from "./Palette";

const SocialMedia = ({currentLang}) => {
    return (
        <div className="flex justify-center items-center space-x-4 w-full">
            {
                currentLang.socialmedia.map(n=> (
                    <a 
                        href={n.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-9 w-9 mx-2 rounded-full hover:shadow-md cursor-pointer"
                        style={{ backgroundColor: Palette.accentColor }}
                    >
                        <img 
                            src={require(`../assets/svg/SocialMedia/${n.img}`)}
                            alt={n.img}
                        />
                    </a>
                ))
            }
        </div>
    );
};

export default SocialMedia;
