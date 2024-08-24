import ParagraphFive from "../ui/Paragraph/ParagraphFive";
import Separate from "../ui/Separate";
import Space from "../ui/Space";
import Columns from "../ui/Columns";
import Card from "../ui/Card";

const Offer = () => {
    const uicss = {
        "containerTwo": "w-10/12 flex flex-col justify-center h-screen max-md:h-fit",
    }

    return (
        <div className={uicss.containerTwo}>
            <ParagraphFive uicss="text-center my-8">What I Offer ?</ParagraphFive>
            <Columns nbr={4} uicss="max-md:flex-col flex-wrap justify-between items-start  max-md:h-fit">
                <Card 
                    para="Web Developement"
                    text="I create custom web applications from scratch using modern technologies like React.js, Node.js, and More."
                />
                <Card 
                    para="Wordpress Developement"
                    text="I design and develop custom Wordpress themes and plugins tailored to your business needs."
                />
                <Card 
                    para="API Developement"
                    text="I build robust and scalable API's to power your web and mobile applications."
                />
                <Card
                    para="Consulting Developement"
                    text="Need advice on your web developement strategy? I offer consulting services to help you make the best technology choices."
                />             
            </Columns>
            <Space /><Space /><Space /><Space />
        </div>
    )
}

export default Offer;