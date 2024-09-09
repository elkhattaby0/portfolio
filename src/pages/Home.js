import Footer from "../components/Footer";
import Skills from "../components/Home/Skills"
import Hero from "../components/Home/Hero";
import Offer from "../components/Home/Offer";
import Timeline from "../components/Home/Timeline";
import Testimonial from "../components/Home/Testimonial";
import ContactForm from "../components/Contact/ContactForm";
import BackToTop from "../components/ui/BackToTop";
import AboutMe from "../components/Home/AboutMe";
import Palette from "../components/Palette";
import CTA from "../components/Home/CTA";

const Home = ({currentLang}) => {
    const uicss = {
        "fullcontainer": "w-full flex flex-col items-center justify-between",
    }

    return (
        <div className={uicss.fullcontainer} style={{backgroundColor:Palette.backgroundColor}}>

            <Hero currentLang={currentLang.homepage.hero} /> 
            <BackToTop />
            <AboutMe currentLang={currentLang.homepage.about}/>
            <Skills currentLang={currentLang.homepage.skills}  />
            <CTA currentLang={currentLang.homepage.cta} />
            <Timeline currentLang={currentLang.homepage.journey}  />
            <Offer currentLang={currentLang.homepage.services} />
            <ContactForm currentLang={currentLang.homepage.contact} />       
            <Testimonial currentLang={currentLang.homepage.feedback} />            
            <Footer currentLang={currentLang} />

        </div>
    )
}

export default Home;