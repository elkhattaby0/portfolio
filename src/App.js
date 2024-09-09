import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './components/NoPage';
import English from "./Backend/English.json"

import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useState } from 'react';

const App = () => {
    const [lang, setLang] = useState(English);

    return (
        <BrowserRouter>
            <Navbar currentLang={lang.navbar} switchLang={setLang} />
            <Routes>
                <Route index element={<Home currentLang={lang} />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
