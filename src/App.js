import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='services' element={<Services />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App