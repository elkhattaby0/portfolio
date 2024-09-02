import ContactForm from "../components/Contact/ContactForm"
import Footer from "../components/Footer"
import Space from "../components/ui/Space"

const Contact = () => {
    return (
        <div
            className="w-full "
        >
            {<ContactForm />}
            <Space />
            {<Footer />}
        </div>
    )
}
export default Contact