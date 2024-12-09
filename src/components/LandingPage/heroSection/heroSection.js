'use client';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import ButtonReactive from "@/components/Buttons/ButtonReactive";

export default function HeroSection() {
    return (
        <>
            <div className="mb-lg-5 pb-lg-5">
                <div className="shape-divider-top ">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" className="shape-fill"></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" className="shape-fill"></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
                <section className="d-flex align-items-center hero-section mb-lg-5 pb-lg-5">
                    <Container>
                        <Row id="hero">
                            <Col lg={6} className="d-flex flex-column justify-content-center pt-lg-0">
                                <h1>
                                    <span>CODE</span>
                                    <span style={{color: "#38F1B9"}}>LOGIC</span>
                                </h1>
                                <h5 className="text-white mb-5">
                                    A consulting firm specialized in
                                    <Typewriter
                                        options={{
                                            strings: ['< software /> solutions.'],
                                            autoStart: true,
                                            loop: true,
                                            pauseFor: 10000,
                                        }}
                                    />
                                </h5>
                                <h6 className="text-white">
                                    At <span className="fw-bold">CODELOGIC</span>, We engineer innovative solutions to
                                    transform your vision <br/> into a thriving reality.
                                </h6>
                                <Row className="mt-3 justify-content-center justify-content-lg-start">
                                    <Col xs="auto" >
                                        <ButtonReactive autoRedirect={true} text={"LET’S TALK NOW"} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} data-aos="zoom-in" data-aos-delay="200"
                                 className="hero_section_col_right text-center d-none d-lg-block">
                                <div
                                    className="hero_section_right_side text-center text-lg-left mb-sm-5 pb-md-5 mb-sm-5 pb-md-5">
                                    <div className="bkPsUw mockup1">
                                        <img src="/assets/mockups/mockup-card.svg" alt="Mockup"/>
                                    </div>
                                    <div className="hKkpRc mockup2">
                                        <img src="/assets/mockups/mockup-card2.svg" alt="Mockup"/>
                                    </div>
                                    <div className="qttSU mockup3">
                                        <img src="/assets/mockups/mockup-content.svg" alt="Mockup"/>
                                    </div>
                                    <div className="csUyAM mockup4">
                                        <img src="/assets/mockups/mockup2-bg.svg" alt="Mockup"/>
                                    </div>
                                    <div className="kPVVkw mockup5">
                                        <img src="/assets/mockups/mockup3-bg.svg" alt="Mockup"/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
}
