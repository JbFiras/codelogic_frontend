import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderNavbar() {
    const router = useRouter();
    const [selected, setSelected] = useState("");
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false); // Track navbar state
    const [underlineLeft, setUnderlineLeft] = useState("50%"); // Default value

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/connect" },
    ];

    useEffect(() => {
        const currentRoute = navigation.find((item) => item.href === router.pathname);
        if (currentRoute) {
            setSelected(currentRoute.name);
        }
    }, [router.pathname]);

    const handleNavigation = (href, name) => {
        router.push(href).then(() => {
            setSelected(name);
            setIsNavbarExpanded(true); // Keep the navbar open after clicking
        });
    };

    const handleToggle = () => {
        setIsNavbarExpanded((prev) => !prev);
    };

    const closeNavbar = () => {
        setIsNavbarExpanded(false); // Close the navbar when needed
    };

    // Update underline position dynamically based on screen size
    useEffect(() => {
        const updateUnderlineLeft = () => {
            if (window.matchMedia("(max-width: 991px)").matches) {
                setUnderlineLeft("10px"); // Value for small or medium screens
            } else {
                setUnderlineLeft("50%"); // Value for large screens
            }
        };

        // Initial check
        updateUnderlineLeft();

        // Add a resize event listener
        window.addEventListener("resize", updateUnderlineLeft);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateUnderlineLeft);
        };
    }, []);

    const underlineVariants = {
        hidden: {
            pathLength: 0,
            opacity: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    return (
        <Navbar
            bg="transparent"
            expand="lg"
            variant="light"
            expanded={isNavbarExpanded} // Control the expanded state
        >
            <Container>
                <Navbar.Brand>
                    <Link href="/" className="text-white fs-5 no-underline">
                        <b>
                            <span>CODE</span>
                            <span style={{ color: "#38F1B9" }}>LOGIC</span>
                        </b>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle
                    className="custom-toggle"
                    aria-controls="navbar-nav"
                    onClick={handleToggle} // Toggle navbar state
                />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto d-flex gap-4">
                        {navigation.map((item) => {
                            const isSelected = item.name === selected;

                            return (
                                <Nav.Link
                                    as="span"
                                    key={item.name}
                                    className={`position-relative text-white fs-5 no-underline ${
                                        isSelected ? "fw-semibold" : "text-secondary"
                                    }`}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation(item.href, item.name);
                                        }}
                                        className="text-decoration-none text-inherit cursor-pointer"
                                    >
                                        {item.name}
                                    </Link>
                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div
                                                className="position-absolute"
                                                style={{
                                                    bottom: "-5px",
                                                    left: underlineLeft,
                                                    transform: underlineLeft === "50%" ? "translateX(-50%)" : "none",
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                            >
                                                <svg
                                                    width="37"
                                                    height="8"
                                                    viewBox="0 0 37 8"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <motion.path
                                                        d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                                                        stroke="#7043EC"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        variants={underlineVariants}
                                                    />
                                                </svg>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Nav.Link>
                            );
                        })}
                    </Nav>

                    <Nav className="ms-auto">
                        <Nav.Link as="span">
                            <Link
                                href="/connect"
                                className="no-underline fs-6"
                                style={{ color: "#38F1B9" }}
                                onClick={closeNavbar} // Close navbar after clicking
                            >
                                Start New Project
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
