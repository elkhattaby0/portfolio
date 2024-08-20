
const ParagraphTwo = ({children, uicss=""}) => {
    const style = {
        "paraTwo": `text-darkblue font-bold text-5xl ${uicss}`
    }

    return (
        <h2 className={style.paraTwo}>
            {children}
        </h2>
    )
}

export default ParagraphTwo;