
const ParagraphOne = ({children, uicss=""}) => {
    const style = {
        "paraOne": `text-darkblue font-bold text-6xl ${uicss}`
    }

    return (
        <h1 className={style.paraOne}>
            {children}
        </h1>
    )
}

export default ParagraphOne;