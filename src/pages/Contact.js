import ParagraphFive from "../components/ui/Paragraph/ParagraphFive"
import Palette from "../components/Palette"
import Button from "../components/ui/Button"

const Contact = () => {
    const Input = [
        {"id":1, type:"text", placeholder: "Name", height: "55px"},
        {"id":2, type:"email", placeholder: "Email", height: "55px"},
        {"id":3, type:"text", placeholder: "Project", height: "55px"},
    ]

    return (
        <div
            className="w-full flex flex-col items-center mb-4"
        >
            <ParagraphFive 
                uicss="text-center my-8"
                stl={Palette.secondaryColor}
            >&#8729; Contact Me  &#8729;</ParagraphFive>
            <div
                className="w-10/12  flex flex-col items-center justify-start"
            >
                {
                    Input.map(n=> (
                        <input 
                            key={n.id}
                            type={n.type} 
                            placeholder={n.placeholder}
                            className="w-1/2 max-md:w-full outline-none my-2 px-4 rounded-md shadow-md"
                            style={{backgroundColor:Palette.primaryColor, height: n.height, color:Palette.backgroundColor}}
                        />
                    ))
                }
                <textarea
                    placeholder="Project description"
                    className="w-1/2 max-md:w-full outline-none my-2 px-4 pt-4 rounded-md shadow-md"
                    style={{backgroundColor:Palette.primaryColor, height: "150px", color:Palette.backgroundColor}}
                >

                </textarea>
                <Button>Send Message</Button>
            </div>
        </div>
    )
}

export default Contact