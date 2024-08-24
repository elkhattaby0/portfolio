import Space from "../components/ui/Space";
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