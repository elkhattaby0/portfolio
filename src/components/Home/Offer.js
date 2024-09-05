import Space from "../ui/Space";
import Card from "../ui/Card";
import Palette from "../Palette";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        "title": "Web Developement",
        'content': "I create custom web applications from scratch using modern technologies like React.js, Node.js, and More.",
        "img": "Web-Developement.webp"
    },
    {
        "title": "Wordpress Developement",
        "content": "I design and develop custom Wordpress themes and plugins tailored to your business needs.",
        "img": "Wordpress-Developement.webp"
    },
    {
        "title": "API Developement",
        "content": "I build robust and scalable API's to power your web and mobile applications.",
        "img": "API-Developement.webp"
    },
    {
        "title": 'Consulting Developement',
        "content": "Need advice on your web developement strategy? I offer consulting services to help you make the best technology choices.",
        "img": "Consulting-Developement.webp"
    },
] 


const Offer = () => {
    const uicss = {
        "containerTwo": "h-screen max-md:h-fit py-8 w-10/12 flex flex-col justify-center",
    }

    return (
        <section 
            className={uicss.containerTwo}
        >
            <h1 
                data-aos="fade-up"
                className="font-bold text-center my-10 text-3xl"
                style={{color:Palette.secondaryColor}}
            >&#8729; Services &#8729;</h1>
            <div  
                className=" columns-4 max-md:columns-2 max-md:flex-wrap flex-wrap justify-between items-start  max-md:h-fit">
                {
                    Data.map(n=> (
                        <Card 
                            key={n.title}
                            title={n.title}
                            img={n.img}
                            content={n.content}
                        />
                    ))
                }
            </div>
            <Space />
        </section>
    )
}

AOS.init();
export default Offer;
