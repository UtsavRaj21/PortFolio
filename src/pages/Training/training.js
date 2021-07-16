import React from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import './training.css'
import Button from "react-bootstrap/Button";
const Training = () => {
    return (
        <div className="pt-5 pb-3 mt-3 mb-5" id='training'>
            <h1 className="pt-5 text-center pb-4 font-dark">Training</h1>
            <Row className="d-flex justify-content-around">
                <Col md={6}>
                    <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Data Structes and Alogrithms</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start flex-row mb-3">
                                <a className="text-dark text-decoration-none" href=" https://www.pepcoding.com/" target="_blank" rel="noopener noreferrer">
                                    <img href=" https://www.pepcoding.com/" src="https://www.pepcoding.com/images/logo.png" alt="pep" width="50" />
                                </a>
                                <a className="text-dark text-decoration-none" href=" https://www.pepcoding.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="pl-3 linkPep" >Pepcoding Institute</div>
                                </a>
                                <br></br>
                                <div className="pl-5">
                                    Nov'20 - Sep'21
                                </div>

                            </Card.Text>
                            <Card.Text>
                                <span className="keySkill">➢	Key Skills : Java.</span>
                                <br></br>
                                 Each week we would cover around 50 questions from different topics such as
                                 LinkedList, Stack & Queues, HashMap, Heap, Arrays & Strings, Dynamic Programming,
                                 Greedy, Trees, Graph, Searching and Sorting, Text Processing and many more.
                                 <br></br>
                            </Card.Text>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div >
                                    <a href="https://drive.google.com/file/d/1TanDvQf18IBTza1k0PLymFOXx2MQNKOX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-primary" >
                                            Certificate
                                    </Button>
                                    </a>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="focus mt-2 mb-2">
                        <Card.Body>
                            <Card.Title className="text-center  card-title">Web Development</Card.Title>
                            <hr />
                            <Card.Text className="card-text d-flex justify-content-start ">
                                <a className="text-dark text-decoration-none" href=" https://www.pepcoding.com/" target="_blank" rel="noopener noreferrer">
                                    <img href=" https://www.pepcoding.com/" src="https://www.pepcoding.com/images/logo.png" alt="pep" width="50" />

                                </a>
                                <a className="text-dark text-decoration-none" href=" https://www.pepcoding.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="pl-3 linkPep" >Pepcoding Institute</div>
                                </a>
                                <div className="pl-5">
                                    Mar'21 - Sep'21
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <span className="keySkill mt-5 mb-5">➢	Key skills : Html5, CSS, JavaScript, JQuery, Web Scraping, ReactJS.</span>
                                <br></br>
                                 Each week we would cover around 50 questions from different topics such as
                                 LinkedList, Stack & Queues, HashMap, Heap, Arrays & Strings, Dynamic Programming,
                                 Greedy, Trees, Graph, Searching and Sorting, Text Processing and many more.
                                 <br></br>
                            </Card.Text>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div >
                                    <a href="https://drive.google.com/file/d/1TanDvQf18IBTza1k0PLymFOXx2MQNKOX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-primary">
                                            Certificate
                                    </Button>
                                    </a>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Training;