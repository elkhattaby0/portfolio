import Image from "./Image";
import Slider from "react-slick";

const skills = [
    { "name": "HTML", "img": "html.png" },
    { "name": "CSS", "img": "css.png" },
    { "name": "Bootstrap", "img": "bootstrap.png" },
    { "name": "Tailwind", "img": "tailwindcss.png" },
    { "name": "UML", "img": "uml.png" },
    { "name": "WordPress", "img": "wordpress.png" },
    { "name": "Data Managment", "img": 'datamana.png' },
    { "name": "Python", "img": 'python.png' },
    { "name": "PHP", "img": 'php.png' },
    { "name": "Laravel", "img": 'laravel.png' },
    { "name": "Agile", "img": 'agile.png' },
    { "name": "MySQL", "img": 'mysql.png' },
    { "name": "JavaScript", "img": 'js.png' },
    { "name": "MongoDB", "img": 'mongodb.png' },
    { "name": "ExpressJs", "img": 'expressjs.png' },
    { "name": "NodeJs", "img": 'nodejs.png' },
    { "name": "ReactJs", "img": 'reactjs.png' },
    { "name": "Redux Toolkit", "img": 'redux.png' }
];

const Autoslide = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        variableWidth: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    speed: 3000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    speed: 3000,
                }
            }
        ]
    };

    const Logos = (props) => {
        return (
            <div className="flex flex-col items-center w-full px-4 my-20">
                <Image url={props.img} alt={props.name} w="50px" />
                <p className="text-[#f8f7f4] mt-4">{props.name}</p>
            </div>
        );
    };

    return (
        <div className="flex justify-center items-center w-full bg-[#0D0C22] h-fit overflow-hidden"> 
            <div className="w-full h-fit">
                <Slider {...settings}>
                    {skills.map((n, index) => (
                        <div key={index} className="flex justify-center"> 
                            <Logos img={n.img} name={n.name} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Autoslide;
