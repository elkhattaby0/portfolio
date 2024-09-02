import Footer from "../components/Footer";
import Skills from "../components/Home/Skills"
import Hero from "../components/Home/Hero";
import Offer from "../components/Home/Offer";
import Timeline from "../components/Home/Timeline";
import Testimonial from "../components/Home/Testimonial";
import ContactForm from "../components/Contact/ContactForm";

const Home = () => {
    const uicss = {
        "fullcontainer": "w-full flex flex-col items-center justify-between",
    }

    return (
        <div className={uicss.fullcontainer}>

            <Hero />            
            <Skills />
            <Timeline />
            <Offer />
            <ContactForm />       
            <Testimonial />            
            <Footer />

        </div>
    )
}

export default Home;