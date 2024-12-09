'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Code, Users, Globe, Smartphone, Cog } from 'lucide-react';
import HeaderNavbar from "@/components/HeaderNavbar";
import {Button} from "react-bootstrap";
import NewsletterBanner from "@/components/newsletter/banner/newsletterBanner";

const services = [
    {
        name: 'Web Applications',
        icon: <Code className="icon" />,
        description: 'Transform your business processes with custom-built web applications designed to enhance operational efficiency, improve productivity, and provide a seamless, engaging user experience. From interactive dashboards to complex workflows, our web applications are tailored to align with your unique business goals.'
    },
    {
        name: 'CRM Solutions',
        icon: <Users className="icon" />,
        description: 'Empower your team with intelligent CRM systems that streamline customer relationship management. Our solutions enable you to organize customer interactions, track data effortlessly, and drive higher levels of customer satisfaction, all while optimizing your sales and support processes.'
    },
    {
        name: 'Web Platforms',
        icon: <Globe className="icon" />,
        description: 'Build scalable, robust web platforms designed to align with your long-term business vision. Whether it’s powering your e-commerce operations, managing online learning systems, or creating custom web ecosystems, our platforms deliver reliability, flexibility, and growth potential.'
    },
    {
        name: 'Software Development',
        icon: <Code className="icon" />,
        description: 'From ideation to deployment, we develop reliable, feature-rich software solutions tailored to your specific requirements. Whether it’s enterprise-grade applications or innovative tools, our development process ensures quality, security, and scalability.'
    },
    {
        name: 'Mobile Applications',
        icon: <Smartphone className="icon" />,
        description: 'Engage your audience on the go with intuitive, high-performing mobile applications for iOS and Android. Designed with a user-first approach, our mobile apps deliver outstanding functionality, seamless navigation, and an exceptional user experience.'
    },
    {
        name: 'MES Solutions',
        icon: <Cog className="icon" />,
        description: 'Optimize and modernize your manufacturing operations with customized Manufacturing Execution System (MES) solutions. Gain real-time insights, improve operational control, and drive efficiency with intelligent solutions built to meet the demands of your industry.'
    }
];

const reasons = [
    {
        title: 'Tailored Solutions',
        description: 'Every business is unique, and so are our solutions. We craft software tailored to your specific needs, delivering tools and systems that drive operational success, long-term growth, and a competitive edge in your industry.'
    },
    {
        title: 'Cutting-Edge Technologies',
        description: 'Stay ahead of the curve with solutions powered by the latest and most reliable technologies. Our commitment to innovation ensures your business stays future-proof, scalable, and ready to adapt to changing demands.'
    },
    {
        title: 'Commitment to Quality',
        description: 'We don\'t just deliver solutions; we deliver excellence. Every project undergoes rigorous quality assurance to ensure it meets the highest standards of functionality, performance, and reliability.'
    },
    {
        title: 'Cost-Effective Innovation',
        description: 'Maximize your return on investment with cost-effective solutions that don’t compromise on quality. Experience the perfect balance of affordability and innovation, enabling your business to grow and succeed.'
    }
];


export default function Services() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <HeaderNavbar/>
            <div className="py-5">
                <div className="container text-center">
                    <h2 className="text-center fw-bold">Our Services
                    </h2>
                    <h6 className="text-center fw-bold mb-5">
                        We specialize in delivering a diverse range of cutting-edge solutions tailored to meet your unique business needs.
                    </h6>
                    <div className="mb-3 d-flex justify-content-center">
                        <div className="nav nav-pills ">
                            {services.map((service, idx) => (
                                <Button
                                    variant="outline-light rounded-pill"
                                    key={service.name}
                                    className={`me-2 mb-2 ${selectedIndex === idx ? 'active' : ''}`}
                                    onClick={() => setSelectedIndex(idx)}
                                >
                                    {service.name}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient tab-content">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className={`tab-pane fade ${selectedIndex === idx ? 'show active' : ''}`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="d-flex align-items-center gap-3 p-4 shadow rounded"
                                >
                                    <div className="p-3 bg-primary text-white rounded-circle">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="fw-bold mb-2">{service.name}</h3>
                                        <p className="">{service.description}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <NewsletterBanner/>

                    <div className="text-white mt-4">
                        <h2 className="text-center fw-bold mb-3">Why Choose Us?</h2>
                        <div className="row g-4">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="col-md-6"
                                >
                                    <div className="p-4  shadow rounded">
                                        <div className="d-flex align-items-center mb-3">
                                            <CheckCircle className="text-success me-2" />
                                            <h3 className="fw-bold mb-0">{reason.title}</h3>
                                        </div>
                                        <p className=" text-white">{reason.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
