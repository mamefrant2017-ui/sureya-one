import React, { useEffect } from 'react';
// All routing components and hooks are imported from react-router-dom.
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAdvisor from './components/AIAdvisor';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

// Scroll to top on route change. useLocation must be used within the Router context.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={
              <div className="max-w-7xl mx-auto px-4 py-24 text-center">
                <h1 className="text-4xl font-serif font-bold mb-4">About Sureya Academy</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">Founded in 2010, Sureya Academy is a hub for global talent, blending cutting-edge technology with high-standard academic mentorship.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <AIAdvisor />
      </div>
    </Router>
  );
};

export default App;