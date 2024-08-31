import Palette from "../Palette"

const Container = ({children, uicss=""}) => {
    const style = {
        div : `bg-[${Palette.backgroundColor}] ${uicss}`
    } 

    return (
        <div className={style.div} >
            {children}
        </div>
    )   
}

export default Container