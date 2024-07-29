import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Pages/Header";
import Homepage from "./Pages/Homepage";
import AboutMe from "./Pages/About";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

import Arabic from "./Pages/Lang/Arabic.json"
import English from "./Pages/Lang/English.json"
import French from "./Pages/Lang/French.json"

const App = () => {
	const [lang, setLang] = useState(English)

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header current={lang} setLang={setLang}/>}>
					<Route index element={<Homepage current={lang} />} />
					<Route path="about" element={<AboutMe current={lang} />} />
					<Route path="projects" element={<Projects current={lang} />} />
					<Route path="blog" element={<Blog current={lang} />} />
					<Route path="contact" element={<Contact current={lang} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)	
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
