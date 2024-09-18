import Palette from "../Palette";
import Image from "../ui/Image";
import Button from "../ui/Button"

const AboutMe = ({currentLang}) => {

    const uicss = {
        "containerTwo": "h-full max-md:h-fit py-8 w-10/12 flex flex-col justify-center"
    }

    return (
        <section 
            id="about"
            className={uicss.containerTwo}>
            <h1 
                data-aos="fade-up"                
                className="font-bold text-left my-10 text-3xl"
                style={{ color:Palette.HighlightColor }}
            >{currentLang.headtitle}</h1>
            <div className="grid gap-2 grid-cols-1 max-md:grid-cols-1">
                <div>
                    <p
                        data-aos="fade-up"
                        className="font-normal"
                        style={{color: Palette.primaryColor}}
                        dangerouslySetInnerHTML={{ __html: currentLang.description}}/>
                    
                    <div className="flex mt-4">
                        {
                            currentLang.categories.map(n=> (
                            <span key={n.name} className="flex flex-col p-4">
                                    <p data-aos="fade-up"
                                        style={{color: Palette.primaryColor}}
                                        className="text-center text-2xl font-semibold"
                                    >{n.value}</p>
                                    <p data-aos="fade-up"
                                        className="text-center text-md font-normal"
                                        style={{color: Palette.secondaryColor}}>{n.name}</p>
                                </span>  
                            ))
                        }                    
                    </div>
                    <div data-aos="fade-up">
                    <a 
                        href={`/pdf/${currentLang.btn.link}`} 
                        download={currentLang.btn.link}
                        className="btn-download"
                    >
                        <Button uicss="font-normal">{currentLang.btn.title}</Button>
                    </a>
                    </div>
                </div>
            </div>
            

        </section>
    )
}

export default AboutMe;