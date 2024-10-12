import "./projects.css"

const proj = [
    {
        "title": "Daily Prayer Time",
        "img": "../../assets/project1.webp",
        "tech": ["Python", "Flask"]
    },
    {
        "title": "Qneksi Blog",
        "img": "../../assets/project1.webp",
        "tech": ["Next js", "Sass"]
    },
    {
        "title": "Opiniometer",
        "img": "../../assets/project1.webp",
        "tech": ["React Js", "Python", "Chart Js"]
    },
]

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1># Projects.</h1>
            {
                proj.map(n=> (
                    <div className="projectCard">
                        <img src={require('../../assets/project1.webp')} />   
                        <span>
                            <h4>{n.title}</h4>
                            <a>&#9626;</a>
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