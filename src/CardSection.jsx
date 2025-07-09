const CardSection = (props) => {
    const RatingCircles = ({ value }) => {
        const total = 5;

        return (
            <div style={{ display: "flex", gap: "8px" }}>
            {[...Array(total)].map((_, index) => (
                <div
                key={index}
                style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: index < value ? "#0077C0" : "#C7EEFF",
                }}
                />
            ))}
            </div>
        );
    }
    return (
        <section>
            {props.title && <h2>{props.title}</h2>}
            {props.text && <p>{props.text}</p>}
            {
                props.langues && props.langues.map((i, index)=> (
                    <div key={index} 
                        style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <section>
                            {i.title && <h3>{i.title}</h3>}
                            {i.text && <p className="langtext">{i.text}</p>}
                        </section>
                        {i.level && <RatingCircles key={i.level} value={i.level} />}
                    </div>
                ))
            }
            { 
                props.details && props.details.map((i, index)=> (
                    <div key={index}>
                        {i.title && <h3>{i.title}</h3>}
                        {i.subtitle && <a href={i.link} target="_blank" rel="noopener noreferrer">{i.subtitle}</a>}
                        <div>
                            <p>
                                {i.year && <span className="img">
                                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"></path></g></svg>
                                </span>}
                                {i.year && <span>{i.year}</span>}
                            </p>
                            <p>
                                {i.city && <span className="img">
                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" ></path> </g></svg>
                                </span>}
                                {i.city && <span>{i.city}</span>}
                            </p>
                        </div> 
                        {i.text && <p>{i.text}</p>}
                        {i.lists && (<ul>{i.lists.map(e=> <li key={e}>{e}</li>)}</ul>)}
                        {i.skills && (<ul className="skills">{i.skills.map(e=> <li key={e}>{e}</li>)}</ul>)}
                    </div>
                ))
            }               
        </section>
    )
}

export default CardSection