

const Container = ({children, uicss=""}) => {
    const style = {
        div : `bg-[#fff] ${uicss}`
    } 

    return (
        <div className={style.div} >
            {children}
        </div>
    )   
}

export default Container