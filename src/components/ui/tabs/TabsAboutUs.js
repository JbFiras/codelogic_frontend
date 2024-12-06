"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Tabs = ({
                         tabs: propTabs,
                         containerClassName,
                         activeTabClassName,
                         tabClassName,
                         contentClassName,
                     }) => {
    const [activeTab, setActiveTab] = useState(propTabs[0]);
    const [contentHeight, setContentHeight] = useState(0);

    const contentRef = React.useRef();

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight);
        }
    }, [activeTab]);

    return (
        <>
            {/* Tab Buttons */}
            <div
                className={`d-flex flex-column flex-md-row justify-content-center gap-3 mb-4 ${containerClassName}`}
            >
                {propTabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab)}
                        className={`btn text-uppercase fw-bold rounded-pill px-3 py-2 ${
                            activeTab.value === tab.value
                                ? "btn-light text-dark"
                                : "btn-outline-light text-light"
                        } ${tabClassName}`}
                        style={{
                            transition: "background-color 0.3s, color 0.3s",
                            fontSize: "0.875rem", // Smaller text size
                        }}
                        onMouseEnter={(e) => {
                            e.target.classList.remove("text-light");
                            e.target.classList.add("text-dark");
                        }}
                        onMouseLeave={(e) => {
                            if (activeTab.value !== tab.value) {
                                e.target.classList.remove("text-dark");
                                e.target.classList.add("text-light");
                            }
                        }}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div
                className={`position-relative w-100 overflow-hidden rounded-3 ${contentClassName}`}
                style={{ minHeight: contentHeight }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.value}
                        ref={contentRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 bg-gradient text-white"
                        style={{
                            borderRadius: "8px",
                            background: "linear-gradient(135deg, #283E59, #1A233A)",
                        }}
                    >
                        {activeTab.content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};

export function TabsAboutUs() {
    const tabs = [
        {
            title: "Company",
            value: "company",
            content: (
                <div>
                    <h3 className="fw-bold">About CodeLogic</h3>
                    <p>
                        At <strong>CodeLogic</strong>, we are committed to transforming ideas into exceptional digital solutions.
                        We specialize in custom software development, web and mobile applications, cloud services, and cutting-edge technologies.
                        Our mission is to empower businesses with scalable, efficient, and user-centric solutions that drive growth and innovation.
                    </p>
                    <p>
                        Our software development company is a dynamic and diverse team of senior software engineers, designers, and strategists united by a shared mission: crafting exceptional software that distinguishes your business. Our team goes beyond technical expertise, combining creativity and problem-solving skills to understand your unique challenges and deliver customized solutions that surpass expectations.
                    </p>
                </div>
            ),
        },
        {
            title: "Services",
            value: "services",
            content: (
                <div>
                    <h3 className="fw-bold">Our Services</h3>
                    <ul>
                        <li>
                            <strong>Custom Software Development:</strong> Building tailored software solutions for your unique business needs.
                        </li>
                        <li>
                            <strong>Web and Mobile Applications:</strong> Creating responsive, modern, and intuitive apps for all devices.
                        </li>
                        <li>
                            <strong>Cloud Solutions:</strong> Leveraging AWS, Azure, and GCP for scalable and secure cloud infrastructure.
                        </li>
                        <li>
                            <strong>DevOps & Automation:</strong> Streamlining workflows and automating processes for efficiency.
                        </li>
                        <li>
                            <strong>UI/UX Design:</strong> Designing visually appealing and user-friendly digital interfaces.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Values",
            value: "values",
            content: (
                <div>
                    <h3 className="fw-bold">Our Core Values</h3>
                    <p>
                        At CodeLogic, our values serve as the foundation of everything we do. They inspire our work, guide our decisions,
                        and ensure we maintain the highest standards of integrity and innovation.
                    </p>
                    <ul>
                        <li>
                            <strong>Innovation:</strong> We believe in staying ahead of the curve by constantly pushing boundaries and
                            embracing emerging technologies to deliver transformative solutions.
                        </li>
                        <li>
                            <strong>Integrity:</strong> Trust and transparency are at the heart of our relationships with clients and
                            team members. We uphold honesty and accountability in every interaction.
                        </li>
                        <li>
                            <strong>Customer-Centric:</strong> We prioritize our clients' needs, ensuring every solution we deliver
                            creates measurable value and aligns with their business goals.
                        </li>
                        <li>
                            <strong>Collaboration:</strong> Success is a collective effort. We foster a culture of teamwork and mutual respect
                            to deliver outstanding results.
                        </li>
                        <li>
                            <strong>Excellence:</strong> We are committed to exceeding expectations by maintaining a relentless focus on
                            quality and continuous improvement.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Mission",
            value: "mission",
            content: (
                <div>
                    <h3 className="fw-bold">Our Mission</h3>
                    <p>
                        Our mission is to empower businesses and organizations by delivering cutting-edge software solutions
                        that drive growth, efficiency, and innovation.
                    </p>
                    <p>
                        At CodeLogic, we strive to transform complex challenges into scalable and intuitive solutions by leveraging
                        our expertise in software development, cloud computing, and user-centric design.
                        We aim to build lasting partnerships with our clients, enabling them to thrive in an ever-changing digital landscape.
                    </p>
                    <p>
                        Through our commitment to technology and creativity, we seek to make a meaningful impact on the businesses we serve
                        and the communities we engage with.
                    </p>
                </div>
            ),
        },
        {
            title: "Vision",
            value: "vision",
            content: (
                <div>
                    <h3 className="fw-bold">Our Vision</h3>
                    <p>
                        To be a global leader in software development and consulting, setting new standards for innovation, quality,
                        and client satisfaction.
                    </p>
                    <p>
                        We envision a world where businesses of all sizes can harness the power of technology to unlock their full potential.
                        Our goal is to be the trusted partner that delivers solutions which redefine possibilities and inspire success.
                    </p>
                    <p>
                        By continuously evolving and embracing emerging trends, we aim to remain at the forefront of the software industry,
                        enabling our clients to stay ahead in an increasingly competitive and digital-first world.
                    </p>
                </div>
            ),
        },
        {
            title: "The Team",
            value: "the-team",
            content: (
                <div>
                    <h3 className="fw-bold">Meet Our Team</h3>
                    <p>
                        Welcome to the backbone of our success — our dedicated team of professionals! We are a dynamic group of experienced developers, creative designers, meticulous project managers, and tech enthusiasts who share a passion for delivering exceptional solutions.
                    </p>
                    <h4>Our Philosophy</h4>
                    <p>
                        We believe that every great project begins with a strong partnership. By fostering open communication and a shared commitment to success, we help transform ideas into reality. Our team thrives on challenges and embraces every opportunity to innovate, adapt, and grow.
                    </p>
                    <h4>Why Work With Us?</h4>
                    <p>
                        When you choose us, you’re not just hiring a team — you’re gaining a partner who genuinely cares about your goals. Together, we aim to create solutions that are not only effective but also inspiring.
                    </p>
                    <p>Let’s build something extraordinary, together.</p>
                </div>
            ),
        }
    ];

    return (
        <div className="container py-5">
            <Tabs tabs={tabs} />
        </div>
    );
}
