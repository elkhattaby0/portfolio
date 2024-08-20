
const ParagraphThree = ({children, uicss=""}) => {
    const style = {
        "paraThree": `text-darkblue font-bold text-4xl ${uicss}`
    }

    return (
        <h1 className={style.paraThree}>
            {children}
        </h1>
    )
}

export default ParagraphThree;