import React from 'react';
import './myAbout.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/profile.jpg'
import Button from "react-bootstrap/Button";

const MyAbout = () => {
    return (
        <div id="about" className="pt-5 about">
            <h1 className="text-center mt-5 pt-5 font-details">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <img className="profile justify-content-end" alt="profile" src={Profile} thumbnail />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            Hi there! I am <strong>&nbsp;Utsav Raj</strong>
                            <br />
                            I’m a passionate software developer seeking a beginner role to enhance and explore my technical knowledge.
                            <br /> I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                            <br />
                            In 2022, I will successfully complete my Engineering .
                            
                            <br />
                            Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                            
                            
                            <br/>I have flexibity to adapt to any working environment. I work hard and want to use my skills to help company develop and work for mankind.
                            <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                            <br /> <br />

                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                    <Button className="m-2" variant="outline-primary">
                                        Let's talk
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://drive.google.com/file/d/1stPTw1NHm7W_Brg7hZBbB8tObSRDbFxX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success">
                                        My Resume
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/UtsavRaj21" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-dark">
                                        GitHub
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/utsav-raj-4531621ba" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-info">
                                        LinkedIn
                                    </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default MyAbout;