
const ParagraphFive = ({children, uicss="", stl=""}) => {
    const style = {
        "paraFive": `text-darkblue font-bold text-2xl ${uicss}`
    }

    return (
        <h1 className={style.paraFive} style={{color:stl}}>
            {children}
        </h1>
    )
}

export default ParagraphFive;