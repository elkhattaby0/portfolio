

const ParagraphFour = ({children, uicss=""}) => {
    const style = {
        "paraFour": `text-darkblue font-bold text-3xl ${uicss}`
    }

    return (
        <h1 className={style.paraFour}>
            {children}
        </h1>
    )
}

export default ParagraphFour;