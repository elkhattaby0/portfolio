import { useNavigate } from "react-router-dom"

const Button = ({children, link="/", uicss=""}) => {
    const navigate = useNavigate()
    
    const style = {
        "btn": `outline-none m-0 p-4 rounded w-[200px] text-xl bg-[#0D0C22] text-[#f8f7f4] hover:bg-[#f8f7f4] hover:text-[#0D0C22] hover:border-2 border-[#0D0C22]  ${uicss}`
    }

    return (
        <button className={style.btn} onClick={()=> navigate(link)}>
            {children}
        </button>
    )
}

export default Button