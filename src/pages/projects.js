'use client';
import React from "react";
import PageHeader from "../components/PageHeader";
import GenericCta from "../components/GenericCta";
import { useInView } from "../hooks/useInView";
import { Globe, Smartphone, Code2, Database, Cloud, GitBranch } from "lucide-react";
import Image from "next/image";

const TechStack = ({ title, technologies, icon, delay }) => {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 hover:ring-[#38F1B9]/50 transition-all duration-300 group opacity-0 ${isInView ? "animate-fade-in" : ""}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#38F1B9]/10 mb-4 group-hover:bg-[#38F1B9]/20 transition-colors duration-300">
                {React.cloneElement(icon, {
                    className: "w-6 h-6 text-[#38F1B9] transform group-hover:scale-110 transition-transform duration-300",
                    strokeWidth: 1.5,
                })}
            </div>
            <h3 className="text-white font-display text-xl font-bold mb-4 group-hover:text-[#38F1B9] transition-colors duration-300">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {technologies?.map((tech, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 text-sm rounded-full bg-[#38F1B9]/10 text-[#38F1B9] ring-1 ring-[#38F1B9]/20"
                    >
            {tech}
          </span>
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ title, description, image, technologies, type, delay }) => {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-[#38F1B9]/50 transition-all duration-300 opacity-0 ${isInView ? "animate-fade-in" : ""}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1534] to-transparent z-10"></div>
                <Image
                    src={image}
                    alt={title}
                    height={300}
                    width={300}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                    {type === "web" && <Globe className="w-5 h-5 text-[#38F1B9]" />}
                    {type === "mobile" && <Smartphone className="w-5 h-5 text-[#38F1B9]" />}
                    {type === "both" && (
                        <div className="flex gap-2">
                            <Globe className="w-5 h-5 text-[#38F1B9]" />
                            <Smartphone className="w-5 h-5 text-[#38F1B9]" />
                        </div>
                    )}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-[#38F1B9] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-[#38F1B9]/10 text-[#38F1B9] ring-1 ring-[#38F1B9]/20"
                        >
              {tech}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const techStacks = [
        {
            icon: <Code2 />,
            title: "Frontend Development",
            technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Material UI"],
        },
        {
            icon: <Database />,
            title: "Backend Development",
            technologies: ["Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
        },
        {
            icon: <Cloud />,
            title: "DevOps & Cloud",
            technologies: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Terraform"],
        },
        {
            icon: <GitBranch />,
            title: "Development Tools",
            technologies: ["Git", "GitHub Actions", "Jenkins", "Jira", "Confluence", "Swagger"],
        },
    ];

    const projects = [
        {
            title: "E-commerce Platform",
            description: "A modern e-commerce solution with real-time inventory management and AI-powered recommendations.",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
            technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis"],
            type: "web",
            link: "#",
        },
        {
            title: "Health & Fitness App",
            description: "Cross-platform mobile application for tracking workouts, nutrition, and wellness goals.",
            image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=60",
            technologies: ["React Native", "Firebase", "TypeScript", "Redux", "Node.js"],
            type: "mobile",
        },
        {
            title: "Learning Management System",
            description: "Comprehensive platform for online education with video streaming and interactive assessments.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
            technologies: ["Next.js", "Tailwind", "Supabase", "TypeScript", "AWS"],
            type: "both",
            link: "#",
        },
        {
            title: "Supply Chain Management",
            description: "Enterprise solution for tracking and managing complex supply chain operations.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
            technologies: ["React", "Django", "PostgreSQL", "Docker", "Kubernetes"],
            type: "web",
            link: "#",
        },
        {
            title: "Real Estate Platform",
            description: "Advanced property management system with virtual tours and AI-powered pricing.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
            technologies: ["Vue.js", "FastAPI", "MongoDB", "AWS", "TensorFlow"],
            type: "both",
        },
        {
            title: "Financial Analytics Dashboard",
            description: "Real-time financial data visualization and analysis platform for investors.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
            technologies: ["React", "Node.js", "D3.js", "WebSocket", "Redis"],
            type: "web",
            link: "#",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0c1534] pt-20">
            <PageHeader
                title="Our Projects"
                description="Explore our portfolio of innovative solutions built with cutting-edge technologies"
            />
            <div className="container mx-auto px-4 sm:px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
                        Our Technology Stack
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We leverage the latest frameworks and tools to build scalable, secure, and performant applications
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techStacks.map((stack, index) => (
                        <TechStack key={index} {...stack} delay={200 * (index + 1)} />
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover how we&#39;ve helped businesses transform their ideas into successful digital solutions
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} delay={200 * (index + 1)} />
                    ))}
                </div>
            </div>
            <GenericCta
                title="Ready to Build Something Amazing?"
                description="Let's discuss how we can help bring your project to life using our expertise and cutting-edge technology stack."
                buttons={[
                    {
                        text: "Start Your Project",
                        variant: "primary",
                    },
                    {
                        text: "Schedule Consultation",
                        variant: "secondary",
                    },
                ]}
                className="pb-20"
            />
        </div>
    );
};

export default Projects;
