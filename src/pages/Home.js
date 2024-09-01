import Footer from "../components/Footer";
import Autoslide from "../components/Home/Autoslide";
import Hero from "../components/Home/Hero";
import Offer from "../components/Home/Offer";
import Timeline from "../components/Home/Timeline";
import Testimonial from "../components/Home/Testimonial";
import Contact from "./Contact"

const Home = () => {
    const uicss = {
        "fullcontainer": "w-full flex flex-col items-center justify-between",
    }

    return (
        <div className={uicss.fullcontainer}>

            <Hero />
            <Timeline />
            <Autoslide />
            <Offer />
            <Contact />       
            <Testimonial />            
            <Footer />

        </div>
    )
}

export default Home;