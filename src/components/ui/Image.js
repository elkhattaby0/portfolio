
const Image = ({ url, alt, w, mix="multiply" }) => {

    const style = {
        "img": `m cursor-pointer mix-blend-multiply object-cover ${mix}`
    }
    return (
        <img
            src={require(`../../assets/${url}`)}
            alt={alt}
            className={style.img}
            width={`${w}px`}
            loading="lazy"
        />
    )
}

export default Image