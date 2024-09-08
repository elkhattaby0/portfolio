import Palette from "../Palette";
import Image from "../ui/Image";

const AboutMe = ({currentLang}) => {

    const uicss = {
        "containerTwo": "h-full max-md:h-fit py-8 w-10/12 flex flex-col justify-center"
    }

    return (
        <section className={uicss.containerTwo} style={{backgroundColor: Palette.backgroundColor}}>
            <h1 
                data-aos="fade-up"
                className="font-bold text-left my-10 text-3xl"
                style={{color:Palette.secondaryColor}}
            >{currentLang.headtitle}</h1>
            <div className="grid gap-2 grid-cols-2 max-md:grid-cols-1">
                <div 
                    className="relative w-96 h-full max-md:w-60 max-md:mb-2 max-md:h-60 rounded-2xl overflow-hidden border shadow brightness-50"
                    style={{ background: Palette.HighlightColor }}
                >
                    <Image
                        url="profile.png"
                        w="100%"
                        mix="mix-blend-normal absolute -left-[20px] max-md:-left-[5px] top-[20px] object-cover -rotate-[9deg]"
                    />
                </div>
                <div>
                    <p
                        data-aos="fade-up"
                        className="text-md"
                        style={{color: Palette.secondaryColor}}
                    >{currentLang.description}</p>
                    
                    <div className="flex mt-4">
                        {
                            currentLang.categories.map(n=> (
                            <span key={n.name} className="flex flex-col p-4">
                                    <p data-aos="fade-up"
                                        style={{color: Palette.primaryColor}}
                                        className="text-center text-2xl"
                                    >{n.value}</p>
                                    <p 
                                        className="text-center text-md"
                                        style={{color: Palette.secondaryColor}}>{n.name}</p>
                                </span>  
                            ))
                        }                    
                    </div>
                </div>
            </div>
            

        </section>
    )
}

export default AboutMe;