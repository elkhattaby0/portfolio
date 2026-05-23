import { useEffect, useState } from "react";
import CardSection from "./CardSection";
import QRCode from "./QRCode";
import english from "../public/languages/english.json";
import french from "../public/languages/french.json";

const translations = {
    english,
    french,
};

const ContactIcon = ({ type }) => {
    const commonProps = {
        width: 16,
        height: 16,
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
    };

    if (type === "phone") {
        return (
            <svg {...commonProps}>
                <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24a11.36 11.36 0 0 0 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1a11.36 11.36 0 0 0 .57 3.57a1 1 0 0 1-.24 1Z" />
            </svg>
        );
    }

    if (type === "email") {
        return (
            <svg {...commonProps}>
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4.24l-7.38 4.61a1.2 1.2 0 0 1-1.24 0L4 8.24V6l8 5l8-5Z" />
            </svg>
        );
    }

    if (type === "linkden") {
        return (
            <svg {...commonProps}>
                <path fill="currentColor" d="M6.94 8.5H3.56V20h3.38zM5.25 3A1.97 1.97 0 1 0 7.22 5A1.97 1.97 0 0 0 5.25 3m10.06 5.23c-1.8 0-2.6.99-3.05 1.69V8.5H8.88V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95s1.88 1.74 1.88 3.04V20h3.38v-6.27c0-3.08-.66-5.5-4.35-5.5" />
            </svg>
        );
    }

    return (
        <svg {...commonProps}>
            <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5" />
        </svg>
    );
};

export default function App() {
    const [lang, setLang] = useState(() => {
        if (typeof window === "undefined") {
            return "english";
        }

        const savedLang = window.localStorage.getItem("portfolio-lang");
        return savedLang === "french" ? "french" : "english";
    });
    const data = translations[lang] ?? english;
    const linkedInProfile = data.contact?.find((item) => item.type === "linkden")?.link;
    const email = data.contact?.find((item) => item.type === "email")?.value;
    const phone = data.contact?.find((item) => item.type === "phone")?.value;
    const address = data.contact?.find((item) => item.type === "address")?.value;
    const faqEntries = data.faq ?? [];
    const coreSkills = [
        "Full Stack Development",
        "React",
        "Next.js",
        "Node.js",
        "WordPress",
        "Laravel",
        "SEO",
        "Web Development",
    ];
    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            name: data.fullname,
            jobTitle: data.subtitle,
            description: data.details?.find((section) => section.title === "resume" || section.title === "profil")?.text,
            email: email ? `mailto:${email}` : undefined,
            telephone: phone,
            address: address
                ? {
                    "@type": "PostalAddress",
                    addressLocality: address,
                    addressCountry: "MA",
                }
                : undefined,
            url: "https://elkhattaby.vercel.app/",
            image: "https://elkhattaby.vercel.app/Images/profile.webp",
            sameAs: linkedInProfile ? [linkedInProfile] : undefined,
            knowsAbout: coreSkills,
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: `${data.fullname} Portfolio`,
            url: "https://elkhattaby.vercel.app/",
            inLanguage: lang === "french" ? "fr" : "en",
        },
        ...(faqEntries.length
            ? [{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqEntries.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer,
                    },
                })),
            }]
            : []),
    ];

    useEffect(() => {
        document.documentElement.lang = lang === "french" ? "fr" : "en";
        window.localStorage.setItem("portfolio-lang", lang);
    }, [lang]);

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

	return (    
		<main id="main">
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            <QRCode /> <SwitchLang />
            <div id="head">
                <section>
                    <h1>{data.fullname}</h1>
                    <h2>{data.subtitle}</h2>
                    <ul>
                        {data.contact && data.contact.map(n => (
                            <li key={n.type} style={{ display: "flex", justifyContent: "center" }}>
                            <a href={n.link} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                                <span className="contact-icon">
                                    <ContactIcon type={n.type} />
                                </span>
                                {n.value}
                            </a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <div></div>
                    {data.img && <img src={data.img} alt={data.fullname} id="profile" width="140" height="140" fetchPriority="high" decoding="async" />}
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
                {faqEntries.length > 0 && (
                    <section>
                        <h2>{data.faqTitle}</h2>
                        <div className="faq-list">
                            {faqEntries.map((item, index) => (
                                <details key={item.question} className="faq-item" open={index === 0}>
                                    <summary>{item.question}</summary>
                                    <p>{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                )}

            </div>
		</main>
	);
};
