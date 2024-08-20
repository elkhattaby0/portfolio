

const Text = ({children, uicss=""}) => {
    const style = {
        "text": `text-black text-xl p-0 m-0 w-full ${uicss}` 
    };

    return (
        <p className={style.text}>
            {children}
        </p>
    )
}

export default Text