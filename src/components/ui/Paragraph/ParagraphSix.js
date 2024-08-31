
const ParagraphSix = ({children, uicss="", stl=""}) => {
    const styleh1 = {
        "paraFive": `text-darkblue font-bold text-x ${uicss}`
    }

    return (
        <h1 className={styleh1.paraFive} style={{color: stl}}>
            {children}
        </h1>
    )
}

export default ParagraphSix;