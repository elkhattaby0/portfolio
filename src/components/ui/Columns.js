
const Columns = ({children, nbr=1, uicss="", stl=""}) => {

    const style = {
        "column": `flex items-center rounded-md columns-${nbr} ${uicss}` 
    }
    return (
        <div className={style.column} style={{backgroundColor:stl}}>
            {children}
        </div>
    )

}

export default Columns;