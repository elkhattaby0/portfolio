
import ParagraphFive from "../components/ui/Paragraph/ParagraphFive";
import Space from "../components/ui/Space";
import Columns from "../components/ui/Columns";
import Separate from "../components/ui/Separate";
import Card from "../components/ui/Card";
import Footer from "../components/Footer";
import Autoslide from "../components/ui/Autoslide";
import Hero from "../components/Home/Hero";
import Offer from "../components/Home/Offer";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
    const uicss = {
        "fullcontainer": "bg- w-full flex flex-col items-center justify-between",
    }

    return (
        <div className={uicss.fullcontainer}>

            <Hero />
            <Autoslide />
            <Space />
            <Offer />       
            <Testimonial />
            <Footer />

        </div>
    )
}

export default Home;