import Card from "../ui/Card";
import Palette from "../Palette";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Offer = ({currentLang}) => {
    const uicss = {
        "containerTwo": "h-screen max-md:h-fit py-8 w-10/12 flex flex-col justify-center",
    }

    return (
        <section 
            id="services"
            className={uicss.containerTwo}
        >
            <h1 
                data-aos="fade-up"
                className="font-bold text-center w-full my-10 text-3xl"
                style={{color:Palette.HighlightColor}}
            >{currentLang.headtitle}</h1>
            <div  
                className=" columns-4 max-md:columns-1 max-md:flex-wrap flex-wrap justify-between items-start  max-md:h-fit">
                {
                    currentLang.content.map(n=> (
                        <Card 
                            key={n.id}
                            title={n.text}
                        />
                    ))
                }
            </div>
            <br />
        </section>
    )
}

AOS.init();
export default Offer;
