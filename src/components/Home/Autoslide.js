import { useState } from "react";
import Image from "../ui/Image";
import ParagraphFive from "../ui/Paragraph/ParagraphFive";
import { Accordion, AccordionItem } from "@nextui-org/react";

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
        <div className="bg-[#0D0C22] w-full flex flex-col items-center justify-center">
            <ParagraphFive uicss="text-center text-[#f8f7f4] my-8">Skills</ParagraphFive>
            <div className="w-10/12 h-fit mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4  w-full">
                    {skills.map(({ id, category, skills }) => (
                        <Accordion 
                            key={id} 
                            // className="border flex justify-between" alert('test')&#9665;
                        >
                            <AccordionItem                                
                                onPress={()=> handleToggle}
                                className="w-full flex  flex-col headerskills"
                                aria-label={category}
                                indicator={<span className={"mr-4 text-[#f8f7f4]  text-right font-semibold text-xl  rotate-45 "}>-</span>}
                                title={<span className="ml-4 text-[#f8f7f4]  font-semibold text-xl">{category}</span>}
                            >
                                <div className="w-full">
                                {skills.map((p) => (
                                    <div key={p.name} className="flex items-center p-2 ml-4">
                                        <Image
                                            url={p.img}
                                            alt={p.name}
                                            w="35px"
                                            mix="mix-blend-normal"
                                        />
                                        <p className="text-[#f8f7f4] ml-4">{p.name}</p>
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
