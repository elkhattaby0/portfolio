import ParagraphFive from "../ui/Paragraph/ParagraphFive";
import Palette from "../Palette";
import Button from "../ui/Button";
import Phone from "../../assets/svg/Phone"
import Email from "../../assets/svg/Email";

const ContactForm = () => {
    const Input = [
        {"id":1, type:"text", placeholder: "Name", height: "60px"},
        {"id":2, type:"email", placeholder: "Email", height: "60px"},
        {"id":3, type:"text", placeholder: "Project", height: "60px"},
    ]

    return (
        <div
            className="w-full flex flex-col items-center mb-4 py-4"
        >
            <ParagraphFive 
                uicss="text-center my-10 text-3xl"
                stl={Palette.secondaryColor}
            >&#8729; Contact Me  &#8729;</ParagraphFive>
            <div
                className="w-10/12 flex max-md:flex-col"
            ><br />
                <div className="w-1/2 max-md:w-full">
                    <div className="flex">
                        <h1 className="text-md"
                            style={{color: Palette.HighlightColor}}
                        >
                        <Phone /></h1>
                        <span className="px-4">
                            <h1 className="text-md font-bold"
                                style={{color: Palette.primaryColor}}
                            >Call Me</h1>
                            <p className="text-xl mt-1"
                                style={{color: Palette.secondaryColor}}
                            >+(212) 650 999 953</p>
                        </span>
                    </div>
                    <div className="flex my-4">
                        <h1 className="text-md"
                            style={{color: Palette.HighlightColor}}
                        ><Email /></h1>
                        <span className="px-4">
                            <h1 className="text-md font-bold"
                                style={{color: Palette.primaryColor}}
                            >Email</h1>
                            <p className="text-xl mt-1"
                                style={{color: Palette.secondaryColor}}
                            >eelkhattaby@gmail.com</p>
                        </span>
                    </div><br />
                </div>
                <div className="w-1/2 max-md:w-full flex flex-col items-center justify-start">
                    {
                        Input.map(n=> (
                            <input 
                                key={n.id}
                                type={n.type} 
                                placeholder={n.placeholder}
                                className="w-full outline-none my-2 px-4 rounded-md"
                                style={{backgroundColor:"lightgray", height: n.height, color:Palette.primaryColor}}
                            />
                        ))
                    }
                    <textarea
                        placeholder="Project description"
                        className="w-full outline-none my-2 px-4 pt-4 rounded-md"
                        style={{backgroundColor:"lightgray", height: "150px", color:Palette.primaryColor}}
                    >

                    </textarea>
                    <div className="w-full max-md:w-full mt-2 flex justiy-start">
                        <Button>Send Message</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm