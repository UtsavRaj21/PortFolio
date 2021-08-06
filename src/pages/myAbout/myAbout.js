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
                            <br />A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                            <br />
                            In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
                            <br />
                            Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                            <br />
                            Along with that, I also help people as a COACH on their journey of becoming a professional programmer.
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
                                    <a href="https://drive.google.com/file/d/1uJtuh8yd5-bFOwXkCFPP4itGLFLyW-DM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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