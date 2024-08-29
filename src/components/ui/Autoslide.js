import Image from "./Image";
import ParagraphFive from "./Paragraph/ParagraphFive";
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
    return (   
        <div className="bg-[#0D0C22] w-full flex flex-col items-center justify-center">
            <ParagraphFive uicss="text-center text-[#f8f7f4] my-8">Skills</ParagraphFive>
            <div className="w-10/12 h-fit mb-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((n) => (
                        <Accordion
                            key={n.id}
                            className="w-full"
                            motionProps={{
                                variants: {
                                    enter: {
                                        y: 0,
                                        opacity: 1,
                                        height: "auto",
                                        transition: {
                                            height: {
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                                duration: 1,
                                            },
                                            opacity: {
                                                easings: "ease",
                                                duration: 1,
                                            },
                                        },
                                    },
                                    exit: {
                                        y: -10,
                                        opacity: 0,
                                        height: 0,
                                        transition: {
                                            height: {
                                                easings: "ease",
                                                duration: 0.25,
                                            },
                                            opacity: {
                                                easings: "ease",
                                                duration: 0.3,
                                            },
                                        },
                                    },
                                },
                            }}
                        >
                            <AccordionItem
                                className="w-full font-semibold text-[#f8f7f4] border-b"
                                aria-label={n.category}
                                title={<span className="text-[#f8f7f4] font-semibold text-xl">{n.category}</span>}
                            >
                                {n.skills.map((p, index) => (
                                    <div key={index} className="flex items-center p-2 ">
                                        <Image
                                            url={p.img}
                                            alt={p.name}
                                            w="35px"
                                            mix="mix-blend-normal"
                                        />
                                        <p className="text-[#f8f7f4] ml-4">{p.name}</p>
                                    </div>
                                ))}
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Autoslide;
