import ParagraphFive from "../ui/Paragraph/ParagraphFive";
import Space from "../ui/Space";
import Columns from "../ui/Columns";
import Card from "../ui/Card";
import Palette from "../Palette";

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
        "containerTwo": "w-10/12 flex flex-col justify-center h-fit max-md:h-fit",
    }

    return (
        <div className={uicss.containerTwo}>
            <ParagraphFive 
                uicss="text-center my-10 text-3xl"
                stl={Palette.secondaryColor}
            >&#8729; Services &#8729;</ParagraphFive>
            <Columns nbr={4} uicss="max-md:flex-wrap flex-wrap justify-between items-start  max-md:h-fit">
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
            </Columns>
            <Space />
        </div>
    )
}

export default Offer;