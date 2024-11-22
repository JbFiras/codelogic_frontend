import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

const HeaderNavbar = () => {
    return (
        <Navbar bg="transparent" expand="lg" variant="light">
            <Container>
                {/* Logo */}
                <Navbar.Brand>
                    <Link href="/" className="text-white fs-5 no-underline">
                        <b>
                            <span>CODE</span>
                            <span style={{ color: "#38F1B9" }}>LOGIC</span>
                        </b>
                    </Link>
                </Navbar.Brand>

                {/* Toggle button for responsive behavior */}
                <Navbar.Toggle className="custom-toggle" aria-controls="navbar-nav" />
                {/* Navbar sections */}
                <Navbar.Collapse id="navbar-nav">
                    {/* Section Left */}
                    <Nav className="me-auto">
                        {/* Add left section elements here */}
                    </Nav>

                    {/* Section Middle */}
                    {/*<Nav className="mx-auto">*/}
                    {/*    <Nav.Link as="span">*/}
                    {/*        <Link href="/" className="text-white fs-5 no-underline">*/}
                    {/*            Home*/}
                    {/*        </Link>*/}
                    {/*    </Nav.Link>*/}
                    {/*    <Nav.Link as="span">*/}
                    {/*        <Link href="/about" className="text-white fs-5 no-underline">*/}
                    {/*            About*/}
                    {/*        </Link>*/}
                    {/*    </Nav.Link>*/}
                    {/*    <Nav.Link as="span">*/}
                    {/*        <Link href="/services" className="text-white fs-5 no-underline">*/}
                    {/*            Services*/}
                    {/*        </Link>*/}
                    {/*    </Nav.Link>*/}
                    {/*    <Nav.Link as="span">*/}
                    {/*        <Link href="/contact" className="text-white fs-5 no-underline">*/}
                    {/*            Contact*/}
                    {/*        </Link>*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav>*/}

                    {/* Section Right */}
                    {/*<Nav className="ms-auto">*/}
                    {/*    <Nav.Link as="span">*/}
                    {/*        <Link href="/contact" className="no-underline fs-6" style={{ color: "#38F1B9" }}>*/}
                    {/*            Start New Project*/}
                    {/*        </Link>*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNavbar;
