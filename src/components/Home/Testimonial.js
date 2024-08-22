import Image from "../ui/Image";
import ParagraphFive from "../ui/Paragraph/ParagraphFive";
import Space from "../ui/Space";

const Data = [
    {img: "ribab.jpg", "name": "Client 1", "msg": "Working with Lahoucine was a game-changer. His expertise and dedication were remarkable."},
    {img: "ribab.jpg", "name": "Client 2", "msg": "Lahoucine exceeded our expectations with his innovative solutions and excellent service."},
    {img: "ribab.jpg", "name": "Client 3", "msg": "Exceptional work! Lahoucine's attention to detail and professionalism were outstanding."}
]
const Testimonial = () => {

    const Card = (props) => {
        return (
            <div className="flex flex-col items-center border- border-red-500 w-[300px] max-md:w-full h-[400px] bg-[#f8f7f4] rounded-xl shadow-md my-4">
                <div className="h-[50%]  max-md:h-[60%] w-full border- border-red-500 overflow-hidden">
                    <Image url={props.img} alt={props.name} className="object-cover w-full h-full" />
                </div>
                <div className="h-[50%]  max-md:h-[40%] bg-[#f8f7f4] m-4 p-4 sticky bottom-0 rounded-xl">
                    <p className="text-xl font-bold text-center">{props.name}</p>
                    <Space />
                    <i className="font-base">{props.msg}</i>
                </div>
                
            </div>
        )
    }

    return (
        <div className="bg-[#0D0C22] flex flex-col items-center justify-center w-full h-fit border- py-8">
            <ParagraphFive uicss="text-[#f8f7f4] text-center">Testimonial</ParagraphFive>
            <Space />
            <div className="w-10/12 h-fit border- flex justify-between max-md:flex-col">
            {
                Data.map(n=> <Card img={n.img} name={n.name} msg={n.msg} />)
            }
            </div>
        </div>
    )
}

export default Testimonial;