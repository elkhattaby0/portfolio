
const ParagraphFive = ({children, uicss=""}) => {
    const style = {
        "paraFive": `text-darkblue font-bold text-2xl ${uicss}`
    }

    return (
        <h1 className={style.paraFive}>
            {children}
        </h1>
    )
}

export default ParagraphFive;