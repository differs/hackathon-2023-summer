import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faBitcoin, faGithub, faGoogle, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Container from 'react-bootstrap/Container';

const Timeline = () => {
    return (
        <section id="timeline" className="timeline-block">
            <Container fluid>
                <div className="title-holder">
                <h2>Our Roadmap</h2>
                <div className="subtitle">What are we going to do and when</div>
                </div>

                <div className="timeline">
                    <VerticalTimeline lineColor="#000">
                        <VerticalTimelineElement className="vertical-timeline-element--education"
                        iconStyle={{background: '#000', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2023 - 06"
                        icon = {<FontAwesomeIcon icon={faTwitter} size="2x" spin/>}
            
                        >
                            <h2 className="vertical-timeline-element-subtitle">Project preparation</h2>
                            <h4 className="vertical-timeline-element-subtitle">Objectives</h4>

                            <p>
                                Determine the game type and basic gameplay, create the project folder and version control system.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--education"
                        iconStyle={{background: '#000', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2023 - 06"
                        icon = {<FontAwesomeIcon icon={faInstagram} size="2x" spin/>}
            
                        >
                            <h3 className="vertical-timeline-element-title">Basic game functionality</h3>
                            <h4 className="vertical-timeline-element-subtitle">Objectives</h4>
                            <p>
                                Implement the basic functions of the game, including character control, collision detection and basic game rules.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--education"
                        iconStyle={{background: '#000', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2023 - 06"
                        icon = {<FontAwesomeIcon icon={faYoutube} size="2x" spin/>}
            
                        >
                            <h3 className="vertical-timeline-element-title">Game level design</h3>
                            <h4 className="vertical-timeline-element-subtitle">Objectives</h4>
                            <p>
                            Design and create the game's levels, including map layout, enemy positions and props, etc.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--education"
                        iconStyle={{background: '#000', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2023 - 06"
                        icon = {<FontAwesomeIcon icon={faGoogle} size="2x" spin/>}
            
                        >
                            <h3 className="vertical-timeline-element-title">Game beautification</h3>
                            <h4 className="vertical-timeline-element-subtitle">Objectives</h4>
                            <p>
                                To enhance the visual and auditory effects of the game and enhance the game experience.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--education"
                        iconStyle={{background: '#000', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2023 - 06"
                        icon = {<FontAwesomeIcon icon={faGithub} size="2x" spin/>}
            
                        >
                            <h3 className="vertical-timeline-element-title">Game Testing and Optimization</h3>
                            <h4 className="vertical-timeline-element-subtitle">Objectives</h4>
                            <p>
                                Test the game features and performance, and make necessary optimizations.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--education"
                        iconStyle={{background: '#000', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2023 - 06"
                        icon = {<FontAwesomeIcon icon={faAws} size="2x" spin/>}
            
                        >
                            <h3 className="vertical-timeline-element-title"> Release and Marketing</h3>
                            <h4 className="vertical-timeline-element-subtitle">Objectives</h4>
                            <p>
                                Publish the game to the appropriate platform and carry out promotion and marketing.
                            </p>
                        </VerticalTimelineElement>

                        {/* <VerticalTimelineElement className="vertical-timeline-element--education"
                        iconStyle={{background: '#000', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2023 - 06"
                        icon = {<FontAwesomeIcon icon={faBitcoin} size="2x" spin/>}
            
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement> */}

                    </VerticalTimeline>

                </div>
            </Container>
        </section>
    )
}

export default Timeline;