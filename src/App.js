import React from 'react';
import Fade from "react-reveal/Fade";
import './App.css';
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Carousel from './components/mycarousel/mycarousel.js';
import MyNavbar from "./components/myNavbar/myNavbar.js";
import TitleMessage from './components/titleMessage/titleMessage';
import MyAbout from './pages/myAbout/myAbout';
import Background from '../src/assets/img/background/background.webp'
import Skills from './pages/skills/skills';
import Training from './pages/Training/training';
import ProjectsTimeline from './pages/projects/projects';
import Contact from './pages/contact/contact';
import FooterPanel from './components/Footer/footer';

// import Particles from "react-particles-js";
// import { particlesOptions } from "./particlesOptions.js";
function App() {
  return (
    <div className="App">
     
      <Carousel />
      <TitleMessage />
      <MyNavbar />
        {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={Background} bgImageAlt="" strength={-200}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={3000}>
                <MyAbout />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={3000}>
            <Skills />
          </Fade>
        </Container>
      </div>

      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={Background} bgImageAlt="" strength={-200}>
          <Container className="container-box rounded">
            <Fade duration={3000}>
              <Training />
            </Fade>
          </Container>
        </Parallax>
      </div>

      <div>
          <Container className="container-box rounded">
            <Fade duration={3000}>
              <ProjectsTimeline />
            </Fade>
          </Container>
      </div>

      <div>
          <Container className="container-box rounded">
            <Fade duration={3000}>
            <hr />
              <Contact />
            </Fade>
          </Container>
      </div>

      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
