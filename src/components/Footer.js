import Palette from "./Palette"
import SocialMedia from "./SocialMedia"


const Footer = ({currentLang}) => {
    const uicss = {
        "fullcontainer": "w-full h-fit max-md:h-fit flex flex-col justify-between items-center pt-8 pb-4",
        "container": "w-1/2 max-md:w-10/12 mx-4 my-8 mb-20 flex flex-col items-center",
        "link": "text-gray-400 hover:text-[#f8f7f4] text-center max-md:text-left"
    }

    return (
        <section 
            className={uicss.fullcontainer}
            style={{backgroundColor: Palette.primaryColor}}    
        >

            <div className={uicss.container}>
                <h1 
                    className="font-bold text-center my-10 text-3xl"
                    style={{color:Palette.backgroundColor}}   
                >
                    {currentLang.footer.headtitle}
                </h1>
                <p 
                    className="text-md text-center w-[70%]  max-md:w-full max-md:ml-2 mb-4"
                    style={{color:Palette.accentColor}}    
                >{currentLang.footer.text}</p>
                <SocialMedia currentLang={currentLang} />
                
            </div>  
            
            <div className="w-10/12 mx-4">
                <p 
                    className="w-full text-white text-md max-md:text-[3vw] p- text-center max-md:text-left"
                    style={{color:Palette.accentColor}}    
                >
                &copy; {new Date().getFullYear()} <i>{currentLang.footer.copyright.name}</i>, {currentLang.footer.copyright.text}
                </p>
            </div>
        </section>
    )
}

export default Footer