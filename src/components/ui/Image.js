const Image = ({ url, alt, w, mix = "mix-blend-multiply" }) => {
    return (
        <img
            src={require(`../../assets/${url}`)}
            alt={alt}
            className={`cursor-pointer object-cover ${mix}`}
            width={w}
            loading="lazy"
        />
    );
};

export default Image;
