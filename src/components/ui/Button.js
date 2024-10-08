import { useNavigate } from "react-router-dom"
import Palette from "../Palette"

const Button = ({children, link="/", uicss="", stl=Palette.backgroundColor}) => {
    const navigate = useNavigate()
    
    const style = {
        "btn": `outline-none m-0 p-4 rounded w-[200px] text-xl  hover:shadow-xl ${uicss}`
    }

    return (
        <button 
            className={style.btn} 
            style={{backgroundColor: Palette.HighlightColor, color: stl}}
            onClick={()=> navigate(link)}
        >
            {children}
        </button>
    )
}

export default Button