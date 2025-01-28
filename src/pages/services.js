'use client';
import React from "react";
import PageHeader from "../components/PageHeader";
import GenericCta from "../components/GenericCta";
import { useInView } from "../hooks/useInView";
import { Code2, Database, Cloud, Shield, Smartphone, Globe, Cpu, GitBranch } from "lucide-react";
import Expertise from "@/components/Expertise";

function ServiceCard({ icon, title, description, features, delay }) {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10 hover:ring-[#38F1B9]/50 transition-all duration-300 group opacity-0 ${isInView ? "animate-fade-in" : ""}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#38F1B9]/10 mb-6 group-hover:bg-[#38F1B9]/20 transition-colors duration-300">
                {React.cloneElement(icon, {
                    className: "w-8 h-8 text-[#38F1B9] transform group-hover:scale-110 transition-transform duration-300",
                    strokeWidth: 1.5,
                })}
            </div>
            <h3 className="text-white font-display text-2xl font-bold mb-4 group-hover:text-[#38F1B9] transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {description}
            </p>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
            <span className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full bg-[#38F1B9]/10 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
            </span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Services() {
    const services = [
        {
            icon: <Code2 />,
            title: "Custom Software Development",
            description:
                "Tailored solutions built from the ground up to meet your unique business requirements and challenges.",
            features: [
                "Custom web and desktop applications",
                "Enterprise software solutions",
                "Legacy system modernization",
                "API development and integration",
            ],
        },
        {
            icon: <Database />,
            title: "Database Architecture",
            description:
                "Robust and scalable database solutions designed to handle your data efficiently and securely.",
            features: [
                "Database design and optimization",
                "Data migration and integration",
                "Performance tuning",
                "High availability solutions",
            ],
        },
        {
            icon: <Cloud />,
            title: "Cloud Solutions",
            description:
                "Modern cloud infrastructure setup and management for optimal performance and reliability.",
            features: [
                "Cloud migration strategies",
                "Infrastructure as Code (IaC)",
                "Serverless architecture",
                "Multi-cloud solutions",
            ],
        },
        {
            icon: <Shield />,
            title: "Security Services",
            description:
                "Comprehensive security measures to protect your applications and sensitive data.",
            features: [
                "Security audits and assessments",
                "Penetration testing",
                "Compliance implementation",
                "Security monitoring",
            ],
        },
        {
            icon: <Smartphone />,
            title: "Mobile Development",
            description:
                "Native and cross-platform mobile applications that deliver exceptional user experiences.",
            features: [
                "iOS and Android development",
                "Cross-platform solutions",
                "Mobile app optimization",
                "App store deployment",
            ],
        },
        {
            icon: <Globe />,
            title: "Web Applications",
            description:
                "Responsive and dynamic web applications built with cutting-edge technologies.",
            features: [
                "Progressive Web Apps (PWA)",
                "Single Page Applications (SPA)",
                "E-commerce solutions",
                "Content Management Systems",
            ],
        },
        {
            icon: <Cpu />,
            title: "DevOps Services",
            description:
                "Streamline your development and operations with modern DevOps practices.",
            features: [
                "CI/CD pipeline setup",
                "Container orchestration",
                "Infrastructure automation",
                "Monitoring and logging",
            ],
        },
        {
            icon: <GitBranch />,
            title: "Consulting & Strategy",
            description:
                "Expert guidance to help you make informed technology decisions.",
            features: [
                "Technology assessment",
                "Digital transformation",
                "Architecture review",
                "Team augmentation",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-[#0c1534] pt-20">
            <PageHeader
                title="Our Services"
                description="We offer a comprehensive suite of software development and technology services to help your business thrive in the digital age."
            />

            <div className="container mx-auto px-4 sm:px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} delay={200 * (index + 1)}/>
                    ))}
                </div>
                <div className="pt-16">
                    <Expertise/>
                </div>
            </div>

            <GenericCta
                title="Ready to Transform Your Business?"
                description="Let's discuss how our services can help you achieve your goals. Our team of experts is ready to create the perfect solution for your needs."
                buttons={[
                    {
                        text: "Schedule a Consultation",
                        variant: "primary",
                    },
                    {
                        text: "View Case Studies",
                        variant: "secondary",
                    },
                ]}
                className="pb-20"
            />
        </div>
    );
}
