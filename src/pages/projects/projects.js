import "./projects.css"

const proj = [
    {
        "title": "Dolce Production",
        "link": "https://dolceproduction.com/",
        "tech": ["Wordpress", "Elementor"]
    },
    {
        "title": "Atlas Azawan",
        "link": "https://atlasazawan.com/",
        "tech": ["Wordpress", "Elementor"]
    },
    
]

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1># Projects.</h1>
            {
                proj.map(n=> (
                    <div className="projectCard">
                        <iframe 
                            src={n.link} 
                            title={n.title}
                        />   
                        <span>
                            <h4>{n.title}</h4>
                            <a 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={n.link}>&#9626;</a>
                        </span> 
                        <ul>
                            {n.tech.map(s=> <li>{s}</li>)}
                        </ul>
                    </div>  
                ))     
            }                 
        </div>
    )
}

export default Projects;