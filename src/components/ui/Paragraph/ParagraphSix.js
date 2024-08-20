
const ParagraphSix = ({children, uicss=""}) => {
    const style = {
        "paraFive": `text-darkblue font-bold text-x ${uicss}`
    }

    return (
        <h1 className={style.paraFive}>
            {children}
        </h1>
    )
}

export default ParagraphSix;