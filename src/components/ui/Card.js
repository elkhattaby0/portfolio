import { useState } from "react";
// import Image from "./Image";
import ParagraphSix from "./Paragraph/ParagraphSix";
import Text from "./Text";
import Space from "./Space";

const Card = ({img="", alt="", para="", text=""}) => {
    const [read, setRead] = useState(false);

    const RedMore = () => {
        if(!read) {
            return (
                <>
                    <Text>
                        {text.slice(0,80) + "..."}
                    </Text>
                    
                </>
            )
        } else {
            return <Text>{text}</Text>
        }
    } 

    const style = {
        "card": 'bg-gradient-to-r from-white to-gray rounded shadow-md w-1/2 p-6 m-2 w-[45%] max-md:w-full mx-0 '
    }
    return (
        <div className={read ? `${style.card} h-fit` : `${style.card} h-[200px]`}>
            {/* <Image url={img} alt={alt} w="100%" /> */}
            <ParagraphSix uicss="text-xl">{para}</ParagraphSix>
            <Space />
            {<RedMore />}
            <button className="italic text-[12px] underline" onClick={()=> {
                read ? setRead(false) : setRead(true)
            }}>
                {read ? "Less" : "Read More..."}
            </button>
        </div>
    )
}

export default Card; 