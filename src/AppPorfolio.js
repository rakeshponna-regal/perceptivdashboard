import { useContext } from 'react';
import './AppPortfolio.css'
import Contact from './portfolio/components/contact/contact';
import Experience from './portfolio/components/experience/experience';
import Footer from './portfolio/components/footer/footer';
import Intro from './portfolio/components/intro/intro';
import Navbar from './portfolio/components/navBar/navbar';
import Portfol from './portfolio/components/portfol/portfol';
import Services from './portfolio/components/services/services';
import Testimonial from './portfolio/components/testimonials/testimonial';
import Works from './portfolio/components/works/works';
import { themeContext } from './context';
function AppPortfolio() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="AppPortfolio" style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : ''
    }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfol />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default AppPortfolio;