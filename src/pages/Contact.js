import ParagraphFive from "../components/ui/Paragraph/ParagraphFive"
import Palette from "../components/Palette"
import Button from "../components/ui/Button"

const Contact = () => {
    const Input = [
        {"id":1, type:"text", placeholder: "Name", height: "60px"},
        {"id":2, type:"email", placeholder: "Email", height: "60px"},
        {"id":3, type:"text", placeholder: "Project", height: "60px"},
    ]

    return (
        <div
            className="w-full flex flex-col items-center mb-4"
        >
            <ParagraphFive 
                uicss="text-center my-10 text-3xl"
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
                            className="w-1/2 max-md:w-full outline-none my-2 px-4 rounded-md"
                            style={{backgroundColor:"lightgray", height: n.height, color:Palette.primaryColor}}
                        />
                    ))
                }
                <textarea
                    placeholder="Project description"
                    className="w-1/2 max-md:w-full outline-none my-2 px-4 pt-4 rounded-md"
                    style={{backgroundColor:"lightgray", height: "150px", color:Palette.primaryColor}}
                >

                </textarea>
                <div className="w-1/2 max-md:w-full mt-2 flex justiy-start">
                    <Button>Send Message</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact