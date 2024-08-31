
const ParagraphOne = ({children, uicss="", stl=""}) => {
    const style = {
        "paraOne": `text-darkblue font-bold text-6xl ${uicss}`
    }

    return (
        <h1 className={style.paraOne} style={{color: stl}}>
            {children}
        </h1>
    )
}

export default ParagraphOne;