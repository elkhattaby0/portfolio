import React, { useState } from "react";
import { SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiJquery, SiJavascript, SiPython, SiMysql, SiMongodb, SiNodedotjs, SiPhp, SiLaravel, SiReact, SiTypescript, SiWordpress, SiExpress, SiGit, SiGithub, SiUml, SiVisualstudiocode, SiElementor, SiCanva, SiJson, SiRabbitmq, SiPostman } from "react-icons/si"; 

import "./skills.css";
const sizeIcon = 40; 
const proj = [
    {
        name: "HTML",
        icon: <SiHtml5 size={sizeIcon} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "CSS",
        icon: <SiCss3 size={sizeIcon} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap size={sizeIcon} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss size={sizeIcon} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "JQuery",
        icon: <SiJquery size={sizeIcon} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "JavaScript",
        icon: <SiJavascript size={sizeIcon} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "Python",
        icon: <SiPython size={sizeIcon} color="#EFFFFB" />,
        category: "Backend",
    },
    {
        name: "MySQL",
        icon: <SiMysql size={sizeIcon} color="#EFFFFB" />,
        category: "Database",
        
    },
    {
        name: "MongoDB",
        icon: <SiMongodb size={sizeIcon} color="#EFFFFB" />,
        category: "Database",
    },
    {
        name: "NodeJs",
        icon: <SiNodedotjs size={sizeIcon} color="#EFFFFB" />,
        category: "Backend",
    },
    {
        name: "PHP",
        icon: <SiPhp size={sizeIcon} color="#EFFFFB" />,
        category: "Backend",
    },
    {
        name: "Laravel",
        icon: <SiLaravel size={sizeIcon} color="#EFFFFB" />,
        category: "Backend",
    },
    {
        name: "ReactJs",
        icon: <SiReact size={sizeIcon} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript size={sizeIcon} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "Wordpress",
        icon: <SiWordpress size={sizeIcon} color="#EFFFFB" />,
        category: "CMS",
    },
    {
        name: "ExpressJs",
        icon: <SiExpress size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "Postman",
        icon: <SiPostman size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "Git",
        icon: <SiGit size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "GitHub",
        icon: <SiGithub size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "UML",
        icon: <SiUml size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "VSCode",
        icon: <SiVisualstudiocode size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "Elementor",
        icon: <SiElementor size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "Canva",
        icon: <SiCanva size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "JSON",
        icon: <SiJson size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "RabbitMQ",
        icon: <SiRabbitmq size={sizeIcon} color="#EFFFFB" />,
        category: "Others",
    },
    
];

const categories = ["All", "Frontend", "Backend", "Database", "CMS", "Others"];

const Skills = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects =
        activeTab === "All"
            ? proj
            : proj.filter((p) => p.category === activeTab);

    return (
        <div className="projects" id="skills">
            <h1>&#10024; Skills.</h1>

            <div className="tabs">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(category)}
                        className={activeTab === category ? "active-tab" : ""}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="skills-list">
                {filteredProjects.map((n, index) => (
                    <div className="projectCard" key={index}>
                        {n.icon}
                        <p>{n.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
