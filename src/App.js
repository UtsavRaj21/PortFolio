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


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Carousel/>
      <TitleMessage/>
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={Background} bgImageAlt=""strength={-200}>
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
            <Skills/>
          </Fade>
        </Container>
      </div>
      
      <div>
      <Parallax blur={{ min: -30, max: 30 }} bgImage={Background} bgImageAlt=""strength={-200}>
        <Container className="container-box rounded">
          <Fade duration={3000}>
            <Training/>
          </Fade>
        </Container>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
