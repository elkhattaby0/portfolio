import ContactForm from "../components/Contact/ContactForm"
import Footer from "../components/Footer"

const Contact = () => {
    return (
        <div
        
            className="w-full "
        >
            {<ContactForm />}
            <br />
            {<Footer />}
        </div>
    )
}
export default Contact