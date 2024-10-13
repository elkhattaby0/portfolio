import "./education.css"

const edu = [
    {
        "title": "Full Stack Developer",
        "time": "2022 - 2024",
        "desc": "Diploma in Full Stack Developer, OFPPT Agadir"
    },
    {
        "title": "Chemistry",
        "time": "2020 - 2022",
        "desc": "Studied Chemistry, University of Sciences Iben Zoher Ait Melloul"
    },
    {
        "title": "High School",
        "time": "2020",
        "desc": "High School Diploma (BAC) in Life and Earth Sciences, Omar El Khayam High School"
    },
]
const Education = () => {
    return (
        <div className="education" id="education">
            <h1>&#10024; Education.</h1>
            {
                edu.map(n=> (
                    <div>
                        <h3>{n.title}.</h3>
                        <span>
                            <h4>{n.time}</h4>
                            <p>{n.desc}.</p>
                        </span>
                        
                    </div>
                ))
            }
            
        </div>
    )
}

export default Education;