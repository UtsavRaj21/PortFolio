import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import './projects.css'
// Projects

import Music from '../../assets/img/projects/music.png';
import Netflix from '../../assets/img/projects/netflix.png';
import Automation from '../../assets/img/projects/automation.png';
import Excel from '../../assets/img/projects/excel.png';

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_JavaScript from "../../assets/img/skills/javascript.svg";
import L_LocalStorage from "../../assets/img/skills/localstorage.jpg";
import L_Puppeteer from "../../assets/img/skills/puppeteer.png";

const ProjectsTimeline = () => {
    return (
        <div className="pt-5" id="projects">
            <h1 className=" pt-5 text-center pb-4 font-details-b">Projects</h1>
            <Timeline>
                <Events>

                <ImageEvent
                        date="16/07/2021"
                        className="text-center"
                        text="Excel Clone"
                        src={Excel}
                        alt="Excel Clone"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is Excel Clone
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>We have formating section i.e fill color,can change text color,change alignment ,cut ,copy,paste.</li>
                                                    <li>We also can add/rename/delete sheet.</li>
                                                    <li>Also we can save our file and reopen the saved one.</li>
                                                
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JavaScript}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_LocalStorage}
                                                                alt="LocalStorage"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            LocalStorage
                                                        </span>
                                                    </li>


                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/UtsavRaj21/Excel-Clone"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                                <UrlButton
                                    href="https://www.linkedin.com/posts/utsav-raj-4531621ba_connections-html-css-activity-6830882718952366080-afvN"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project 1 Music App */}
                    <ImageEvent
                        date="05/06/2021"
                        className="text-center"
                        text="Music App"
                        src={Music}
                        alt="Music App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Music App 
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>You can play any song</li>
                                                    <li> Play and pause the song</li>
                                                    <li>Scroll the audio and manage the volume.</li>
                                                    <li>Play next song or previous song..</li>
                                                    <li>Play your own playlist.</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JavaScript}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>


                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                
                                <UrlButton
                                    href="https://github.com/UtsavRaj21/Music-System"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                                <UrlButton
                                    href="https://www.linkedin.com/posts/utsav-raj-4531621ba_connections-javascript-css-activity-6804102360147857408-TbWX"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* 2nd Project */}

                    <ImageEvent
                        date="06/05/2020"
                        className="text-center"
                        text="Netflix Clone"
                        src={Netflix}
                        alt="Netflix Clone"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is Netflix clone
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Sign-in and sing-up page.</li>
                                                    <li>Email-ID and Password save in local-Storage.</li>
                                                    <li>Alert message on wrong Email-ID and Password.</li>
                                                    <li>Watch the trailer of the movie.</li>
                                                    <li>Logout from the account.</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JavaScript}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_LocalStorage}
                                                                alt="LocalStorage"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            LocalStorage
                                                        </span>
                                                    </li>


                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://lnkd.in/eSAs7Ma"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                                <UrlButton
                                    href="https://www.linkedin.com/posts/utsav-raj-4531621ba_connections-hackathon-pepcoding-activity-6788129213988814848-0Lni"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* 3rd Project */}
                    <ImageEvent
                        date="01/04/2021"
                        className="text-center"
                        text="Automation Project"
                        src={Automation}
                        alt="Automation"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Music App.We are going to have 
                                                some fun with it by web scraping popular posts
                                                 from a Reddit website! . I will be automating the 
                                                 rocess of sharing a post from a reddit in a dedicated FB group 
                                                  Whatsapp group and twitter. 
                                                <hr />
                                                
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Puppeteer}
                                                                alt="Puppeteer"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        Puppeteer
                                                        </span>
                                                    </li>
                                                    


                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                
                                <UrlButton
                                    href="https://github.com/UtsavRaj21/Automatoin-project"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                                <UrlButton
                                    href="https://www.linkedin.com/posts/utsav-raj-4531621ba_connections-hackathon-pepcoding-activity-6788129213988814848-0Lni"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectsTimeline;