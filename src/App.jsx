import { useState, useEffect } from "react";
import CardSection from "./CardSection";
import QRCode from "./QRCode";

export default function App() {
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("english")

    const SwitchLang = () => {
        return (
            <select id="switchLang"
                aria-label="Choose language"
                value={lang}
                onChange={(e) => {
                    setLang(e.target.value);
                }}
            >
                <option value="english">English</option>
                <option value="french">French</option>
            </select>
        )
    }

    useEffect(() => {
        fetch(`./languages/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            setData(data);
        });
    }, [lang]);

	return (    
		<div id="main">
            <QRCode /> <SwitchLang />
            <div id="head">
                <section>
                    <h1>{data.fullname}</h1>
                    <h2>{data.subtitle}</h2>
                    <ul>
                        {data.contact && data.contact.map(n => (
                            <li key={n.type} style={{ display: "flex", justifyContent: "center" }}>
                            <a href={n.link} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                                <span style={{
                                backgroundImage: `url(${n.icon})`,
                                backgroundSize: "16px 16px",
                                backgroundRepeat: "no-repeat",
                                display: "inline-block",
                                width: "16px",
                                height: "16px",
                                marginRight: '5px'
                                }}></span>
                                {n.value}
                            </a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <div></div>
                    {data.img && <img src={data.img} alt={data.fullname} id="profile" />}
                </section>                
            </div>

            <div id="body">
                {
                    data.details && data.details.map(n=> <CardSection 
                            key={n.title}
                            title={n.title}
                            details={n.details}
                            langues={n.langues}
                            text={n.text}
                        />                        
                    )
                }                

            </div>
		</div>
	);
};
