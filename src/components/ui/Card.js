
import Palette from "../Palette";
import Logo from "../../assets/svg/Logo";

const Card = (props) => {
    return (
        <div 
            key={props.title} 
            data-aos="fade-up"
            className=" w-full flex flex-col justify-between "
            style={{background: Palette.backgroundColor}}
        >
            <div 
                style={{background: Palette.backgroundColor}}
                class="relative overflow-hidden rounded-lg border p-2 my-2 shadow">
                <div class="flex h-[150px] max-md:h-fit flex-col max-md:flex-row max-md:items-center max-md:justify-start justify-between rounded-md p-6 max-md:p-3 ">
                    <Logo
                        logo={Palette.HighlightColor}
                        bk='none'
                        w="15px"
                    />
                <div class="space-y-2">
                    <h3 class="text-xl w-1/2 max-md:w-full max-md:ml-3">{props.title}</h3>
                </div>
            </div>
        </div>            
        </div>
    );
};

export default Card; 