
import Palette from "../Palette";
import Logo from "../../assets/svg/Logo";

const Card = (props) => {
    return (
        <div 
            key={props.title} 
            data-aos="fade-up"
            className=" w-full flex flex-col justify-between"
            style={{background: Palette.backgroundColor}}
        >
            <div 
                style={{background: Palette.backgroundColor}}
                class="relative overflow-hidden rounded-lg border p-2 my-2">
                <div class="flex h-[150px] max-md:h-[120px] flex-col justify-between rounded-md p-6 max-md:p-3">
                    <Logo
                        logo={Palette.HighlightColor}
                        bk='none'
                        w="15px"
                    />
                <div class="space-y-2">
                    <h3 class="text-xl w-1/2">{props.title}</h3>
                </div>
            </div>
        </div>            
        </div>
    );
};

export default Card; 