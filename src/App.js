import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './components/NoPage';
import English from "./Backend/English.json"

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';


import { useState } from 'react';

const App = () => {
    const [lang, setLang] = useState(English);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar currentLang={lang.navbar} switchLang={setLang} />}>
                    <Route index element={<Home currentLang={lang} />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='services' element={<Services />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='about' element={<About />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App