import { useEffect, useState } from 'react';
import React  from 'react';
import './App.css';
import './mobileview.css'
import NavBar from './components/navbar';
import About from './pages/about';
import HomePage from './pages/homepage';
import Products from './pages/products';
import Benefits from './pages/benefit';

function App() {

   const [activeSection, setActiveSection] = useState(""); // To track the active section

  useEffect(() => {
    // Intersection Observer for section highlighting
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set  currently visible section
          }
        });
      },
      { threshold: 0.5 } // to trigger when the section is halfway in view
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Cleanup
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
    {/* NAV BAR FOR NAVIGATING TO DIFFERENT SECTIONS */}
      <NavBar handleScrollToSection={handleScrollToSection} activeSection={activeSection}/>

    {/* HOME PAGE SECTION*/}
      <section id='homepage'>
        <HomePage/>
      </section>

      {/* ABOUT PAGE SECTION*/}
      <section id='about'>
        <About/>
      </section>

      {/* PRODUCT PAGE SECTION*/}
      <section id='products'>
        <Products/>
      </section>

      {/* BENEFITS PAGE SECTION*/}
      <section id='benefits'>
        <Benefits />
      </section>
    </div>
  );
}

export default App;
