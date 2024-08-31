
import Palette from "../Palette";
import Image from "./Image";

const Card = (props) => {
    return (
        <div 
            key={props.title} 
            className="relative h-72 max-md:h-64 w-[24.5%] max-md:w-full my-2 rounded-md overflow-hidden flex flex-col justify-between shadow-md group"
            style={{background: Palette.backgroundColor}}
        >
            <Image 
                url={props.img} 
                alt={props.title} 
                mix="absolute inset-0 mix-blend-multiply rounded-md object-cover w-full h-full" 
            />
            <div
                className="h-full cursor-pointer bg-none group-hover:opacity-60"
                style={{backgroundColor: Palette.primaryColor}}
            >
                <p 
                    className="relative top-[70%] group-hover:top-0 m-4 text-xl font-semibold"
                    style={{color: Palette.backgroundColor}}    
                >{props.title}</p>
                <p 
                    className="relative bottom-0 m-4 text-md opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    style={{color: Palette.accentColor}}    
                >
                    {props.content}
                </p>
            </div>
            
        </div>
    );
};

export default Card; 