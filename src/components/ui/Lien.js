
const Lien = ({children, link, target=false}) => {

    return (
        <a   
            href={link}
            target={target ? "_blank" : ""}
            className="relative border-2 border-darkblue rounded bg hover:rounded-full hover:bg-blue-400"
        >
            {children}
        </a>
    )
}

export default Lien