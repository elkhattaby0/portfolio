

const Text = ({children, uicss="", stl=""}) => {
    const style = {
        "text": `text-xl p-0 m-0 w-full ${uicss}` 
    };

    return (
        <p className={style.text} style={{color:stl}}>
            {children}
        </p>
    )
}

export default Text