import React, { useState } from "react";
import { SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiJquery, SiJavascript, SiPython, SiMysql, SiMongodb, SiNodedotjs, SiPhp, SiLaravel, SiReact, SiTypescript, SiWordpress, SiExpress, SiGit, SiGithub, SiUml, SiVisualstudiocode, SiElementor, SiCanva, SiJson, SiRabbitmq } from "react-icons/si"; 

import "./skills.css";

const proj = [
    {
        name: "HTML",
        icon: <SiHtml5 size={45} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "CSS",
        icon: <SiCss3 size={45} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap size={45} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss size={45} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "JQuery",
        icon: <SiJquery size={45} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "JavaScript",
        icon: <SiJavascript size={45} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "Python",
        icon: <SiPython size={50} color="#EFFFFB" />,
        category: "Backend",
    },
    {
        name: "MySQL",
        icon: <SiMysql size={45} color="#EFFFFB" />,
        category: "Database",
        
    },
    {
        name: "MongoDB",
        icon: <SiMongodb size={45} color="#EFFFFB" />,
        category: "Database",
    },
    {
        name: "NodeJs",
        icon: <SiNodedotjs size={45} color="#EFFFFB" />,
        category: "Backend",
    },
    {
        name: "PHP",
        icon: <SiPhp size={45} color="#EFFFFB" />,
        category: "Backend",
    },
    {
        name: "Laravel",
        icon: <SiLaravel size={45} color="#EFFFFB" />,
        category: "Backend",
    },
    {
        name: "ReactJs",
        icon: <SiReact size={45} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript size={45} color="#EFFFFB" />,
        category: "Frontend",
    },
    {
        name: "Wordpress",
        icon: <SiWordpress size={45} color="#EFFFFB" />,
        category: "CMS",
    },
    {
        name: "ExpressJs",
        icon: <SiExpress size={45} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "Git",
        icon: <SiGit size={45} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "GitHub",
        icon: <SiGithub size={45} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "UML",
        icon: <SiUml size={45} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "VSCode",
        icon: <SiVisualstudiocode size={45} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "Elementor",
        icon: <SiElementor size={45} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "Canva",
        icon: <SiCanva size={45} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "JSON",
        icon: <SiJson size={45} color="#EFFFFB" />,
        category: "Others",
    },
    {
        name: "RabbitMQ",
        icon: <SiRabbitmq size={45} color="#EFFFFB" />,
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
        <div className="projects" id="projects">
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
