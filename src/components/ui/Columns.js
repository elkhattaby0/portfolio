
const Columns = ({children, nbr=1, uicss=""}) => {

    const style = {
        "column": `flex items-center columns-${nbr} ${uicss}` 
    }
    return (
        <div className={style.column}>
            {children}
        </div>
    )

}

export default Columns;