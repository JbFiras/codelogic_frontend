import React from "react";
import HeaderNavbar from "@/components/HeaderNavbar";
import IconCarousel from "@/components/LandingPage/heroSection/IconCarousel";
import { TabsAboutUs } from "@/components/ui/tabs/TabsAboutUs";
import Link from "next/link";
import {Button} from "react-bootstrap";

const AboutPage = () => {
    return (
        <>
            <HeaderNavbar />
            <div className="text-light py-5">
                {/* Hero Section */}
                <div className="container py-5">
                    <h1 className="fw-bold text-uppercase text-center">
                        About <span>CODE</span>
                        <span style={{color: "#38F1B9"}}>LOGIC</span>
                    </h1>
                    <h5 className="mt-4 text-justify"
                    >
                        At <strong>CodeLogic</strong>, we pride ourselves on delivering innovative and transformative
                        software solutions designed to empower businesses and drive growth. Our expertise spans a wide
                        range
                        of technologies, from dynamic web and mobile applications to cutting-edge blockchain platforms.
                        We
                        also specialize in building robust SaaS products and versatile CRM systems tailored to
                        streamline
                        operations and enhance customer engagement. At CodeLogic, we are committed to crafting
                        customized
                        solutions that align with your unique business needs and help you achieve your goals with
                        precision
                        and efficiency.
                    </h5>
                </div>
                <div className="pb-3 mb-3">
                    <TabsAboutUs/>
                    <div className="text-center">
                        <h2 className="mb-3">Looking for something else?</h2>
                        <Link href="/connect" className="text-white fs-5 no-underline">
                            <Button variant="outline-light rounded-pill">CONTACT US</Button>
                        </Link>
                    </div>
                </div>
                <div className="container py-5 mt-3 pt-3">
                    <IconCarousel/>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
