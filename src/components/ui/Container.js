import { black, darkblue, gray, red } from "../Palette"

const Container = ({children, uicss=""}) => {
    const style = {
        div : `bg-[${black}] ${uicss}`
    } 

    return (
        <div className={style.div} >
            {children}
        </div>
    )   
}

export default Container