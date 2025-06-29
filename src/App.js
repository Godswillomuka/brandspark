// import React, { useState } from 'react';
import Header from './components/Header';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Reviews from './components/Reviews';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import PageManager from './components/Pages/PageManager';
import './App.css';

function App() {
  // const [currentPage, setCurrentPage] = useState(null);

  // // Expose page navigation globally
  // React.useEffect(() => {
  //   window.navigateToPage = (page) => {
  //     if (page.startsWith('/')) {
  //       const pageName = page.substring(1);
  //       const validPages = [
  //         'team', 'careers', 'blog', 'help', 'design-guidelines', 
  //         'file-preparation', 'shipping', 'returns', 'faq', 
  //         'privacy', 'terms', 'cookies'
  //       ];
        
  //       if (validPages.includes(pageName)) {
  //         setCurrentPage(pageName);
  //       } else {
  //         // For other pages, show a simple coming soon message
  //         alert(`This page (${page}) is coming soon! We're working on building out all our content pages.`);
  //       }
  //     }
  //   };

  //   window.backToHome = () => {
  //     setCurrentPage(null);
  //   };

  //   return () => {
  //     delete window.navigateToPage;
  //     delete window.backToHome;
  //   };
  // }, []);

  // Render specific pages
  // if (currentPage) {
  //   return <PageManager currentPage={currentPage} onBack={() => setCurrentPage(null)} />;
  // }

  // Main website
  return (
    <div className="app">
      <Header />
      {/* <Hero />
      <Services />
      <About />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;