import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { ThemeProvider } from './ThemeProvider'; 

const App = () => {
  return (
    <ThemeProvider>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </ThemeProvider>
  );
}

export default App;
