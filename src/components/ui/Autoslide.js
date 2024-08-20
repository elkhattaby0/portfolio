import "./Autoslide.css"
import Image from "./Image";

const skills1 = [
    {
        "name": "HTML",
        "img": "html.png"
    },
    {
        "name": "CSS",
        "img": "css.png"
    },
    {
        "name": "Bootstrap",
        "img": "bootstrap.png"
    },
    {
        "name": "Tailwind",
        "img": "tailwindcss.png"
    },
    {
        "name": "UML",
        "img": "uml.png"
    },
    {
        "name": "WordPress",
        "img": "wordpress.png"
    },
]

const skills2 = [
    {
        "name": "Data Managment",
        "img": 'datamana.png'
    },
    {
        "name": "Python",
        "img": 'python.png'
    },
    {
        "name": "PHP",
        "img": 'php.png'
    },
    {
        "name": "Laravel",
        "img": 'laravel.png'
    },
    {
        "name": "Agile",
        "img": 'agile.png'
    },
    {
        "name": "MySQL",
        "img": 'mysql.png'
    }
];

const skills3 = [
    {
        "name": "JavaScript",
        "img": 'js.png'
    },
    {
        "name": "MongoDB",
        "img": 'mongodb.png'
    },
    {
        "name": "ExpressJs",
        "img": 'expressjs.png'
    },
    {
        "name": "NodeJs",
        "img": 'nodejs.png'
    },
    {
        "name": "ReactJs",
        "img": 'reactjs.png'
    },
    {
        "name": "Redux Toolkit",
        "img": 'redux.png'
    }
];

const Autoslide = () => {

    return (
        <div className="w-full bg-[#0D0C22] h-fit flex justify-center">
            <div className="w-10/12 flex items-center">
            
                <div className="carousel-container">
                    <div className="carousel my-10">
                        {
                            skills1.map(n=> (
                                <div className="slide flex flex-col items-center">
                                    <Image url={n.img} alt={n.name} w="50px" />
                                    <p className="text-[#f8f7f4]">{n.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="carousel reverse my-10 mt-0">
                        {
                            skills2.map(n=> (
                                <div className="slide flex flex-col items-center">
                                    <Image url={n.img} alt={n.name} w="50px" />
                                    <p className="text-[#f8f7f4]">{n.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="carousel my-10 mt-0">
                        {
                            skills3.map(n=> (
                                <div className="slide flex flex-col items-center">
                                    <Image url={n.img} alt={n.name} w="50px" />
                                    <p className="text-[#f8f7f4]">{n.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Autoslide;
