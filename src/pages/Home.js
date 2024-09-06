import Footer from "../components/Footer";
import Skills from "../components/Home/Skills"
import Hero from "../components/Home/Hero";
import Offer from "../components/Home/Offer";
import Timeline from "../components/Home/Timeline";
import Testimonial from "../components/Home/Testimonial";
import ContactForm from "../components/Contact/ContactForm";
import BackToTop from "../components/ui/BackToTop";

const Home = ({currentLang}) => {
    const uicss = {
        "fullcontainer": "w-full flex flex-col items-center justify-between",
    }

    return (
        <div className={uicss.fullcontainer}>

            <Hero currentLang={currentLang.homepage.hero} /> 
            <BackToTop />
            <Skills currentLang={currentLang.homepage.skills}  />
            <Timeline currentLang={currentLang.homepage.journey}  />
            <Offer currentLang={currentLang.homepage.services} />
            <ContactForm currentLang={currentLang.homepage.contact} />       
            <Testimonial currentLang={currentLang.homepage.feedback} />            
            <Footer currentLang={currentLang} />

        </div>
    )
}

export default Home;