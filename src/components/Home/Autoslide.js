import { useState } from "react";
import Image from "../ui/Image";
import ParagraphFive from "../ui/Paragraph/ParagraphFive";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Palette from "../Palette";

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

const Autoslide = () => {
    const [openItems, setOpenItems] = useState(false);

    const handleToggle = () => {
        setOpenItems(!openItems)
    };

    return (
        <div 
            className="w-full flex flex-col items-center justify-center"
            style={{backgroundColor: Palette.backgroundColor}}
        >
            <ParagraphFive 
                uicss="text-center my-8"
                stl={Palette.secondaryColor}
            >&#8729; Skills  &#8729;</ParagraphFive>
            <div className="w-10/12 h-fit mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    {skills.map(({ id, category, skills }) => (
                        <Accordion 
                            key={id} 
                        >
                            <AccordionItem                                
                                onPress={()=> handleToggle}
                                className={`w-full flex  flex-col headerskills font-semibold text-xl border px-3`}
                                aria-label={category}
                                title={<span 
                                    className="w-[200px] font-semibold text-xl text-left"
                                    style={{color:Palette.accentColor}}
                                    >{id}. {category}</span>}
                            >
                                <div className="w-full p-2"
                                
                                style={{backgroundColor: Palette.primaryColor}}>
                                {skills.map((p) => (
                                    <div key={p.name} 
                                        className="flex items-center rou pl-8 p-3"    
                                    >
                                        <Image
                                            url={p.img}
                                            alt={p.name}
                                            w="25px"
                                            mix="mix-blend-normal"
                                        />
                                        <p 
                                            className="text-[#f8f7f4] ml-4 text-sm"
                                            style={{color:Palette.backgroundColor}}
                                            >{p.name}</p>
                                    </div>
                                ))}
                                </div>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Autoslide;
