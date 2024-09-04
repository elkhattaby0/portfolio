import Palette from "../Palette"
import ParagraphFive from "../ui/Paragraph/ParagraphFive"
import Image from "../ui/Image";

const skills = [
    {
        id: 1,
        category: "Frontend Developer",
        skills: [
            { name: "HTML", img: "html.png" },
            { name: "CSS", img: "css.png" },
            { name: "Bootstrap", img: "bootstrap.png" },
            { name: "Tailwind", img: "tailwindcss.png" },
            { name: "ReactJs", img: "reactjs.png" },
            { name: "JavaScript", img: "js.png" }
        ]
    },
    {
        id: 2,
        category: "Backend Developer",
        skills: [
            { name: "NodeJs", img: "nodejs.png" },
            { name: "PHP", img: "php.png" },
            { name: "Python", img: "python.png" },
            { name: "Laravel", img: "laravel.png" },
            { name: "ExpressJs", img: "expressjs.png" }
        ]
    },
    {
        id: 3,
        category: "CMS",
        skills: [
            { name: "WordPress", img: "wordpress.png" }
        ]
    },
    {
        id: 4,
        category: "Database",
        skills: [
            { name: "MySQL", img: "mysql.png" },
            { name: "MongoDB", img: "mongodb.png" }
        ]
    },
    {
        id: 5,
        category: "Others",
        skills: [
            { name: "UML", img: "uml.png" },
            { name: "Data Management", img: "datamana.png" },
            { name: "Agile", img: "agile.png" },
            { name: "Redux Toolkit", img: "redux.png" }
        ]
    }
];

const Skills = () => {
    return (
            <div 
                className="h-screen w-10/12 flex flex-col items-center justify-around"
                style={{backgroundColor: Palette.backgroundColor}}
            >    
                <ParagraphFive 
                    uicss="text-center my-10 text-3xl"
                    stl={Palette.secondaryColor}
                >&#8729; Skills  &#8729;</ParagraphFive>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {skills.map(({ id, category, skills }) => (
                    <div class="py-" key={id}>
                        <details class="group">
                            <summary class="flex cursor-pointer list-none items-center justify-between font-medium border-b py-4">
                                <span 
                                    className="w-[200px] font-semibold text-xl text-left"
                                >{id}. {category}</span>
                                <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                            </summary>
                            <div className="w-full flex flex-wrap p-">
                                {skills.map((p) => (
                                    <div key={p.name} 
                                        className="flex w-1/2 items-center pl-4 p-3"    
                                    >
                                        <Image
                                            url={p.img}
                                            alt={p.name}
                                            w="25px"
                                            mix="mix-blend-normal bg-gray-800 rounded-full p-1"
                                        />
                                        <p 
                                            className="text-[#f8f7f4] ml-4 text-sm"
                                            style={{color:Palette.primaryColor}}
                                            >{p.name}</p>
                                    </div>
                                ))}
                                </div>
                        </details>
                    </div>
                    ))}
                </div>
            </div>
    )
}

export default Skills