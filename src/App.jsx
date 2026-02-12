import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Customizer from './pages/Customizer';
import Contact from './pages/Contact';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/customizer" element={<Customizer />} />
                <Route path="/customizer/:modelId" element={<Customizer />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Layout>
    );
}

export default App;
