import React, { useState } from "react";
import "./projects.css";

const proj = [
    {
        title: "Atlas Azawan",
        link: "https://atlasazawan.com/",
        tech: ["Wordpress", "Elementor"],
        category: "CMS",
    },
    {
        title: "Dolce Production",
        link: "https://dolceproduction.com/",
        tech: ["Wordpress", "Elementor"],
        category: "CMS",
    },
];

const categories = ["All", "Frontend Projects", "Backend Projects", "CMS Projects"];

const Projects = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects =
        activeTab === "All"
            ? proj
            : proj.filter((p) => p.category === activeTab);

    return (
        <div className="projects" id="projects">
            <h1># Projects.</h1>

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

            <div className="project-list">
                {filteredProjects.map((n, index) => (
                    <div className="projectCard" key={index}>
                        <iframe
                            src={n.link}
                            title={n.title}
                            className="project-frame"
                        />
                        <span className="project-details">
                            <h4>{n.title}</h4>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={n.link}
                            >
                                &#9626;
                            </a>
                        </span>
                        <ul className="tech-list">
                            {n.tech.map((s, i) => (
                                <li key={i}>{s}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
