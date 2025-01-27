import React from 'react';
import { useInView } from '@/hooks/useInView';
import { Globe, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ title, description, image, technologies, type, delay }) {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-[#38F1B9]/50 transition-all duration-300 opacity-0 ${
                isInView ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1534] to-transparent z-10"></div>
                <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                    {type === 'web' && <Globe className="w-5 h-5 text-[#38F1B9]" />}
                    {type === 'mobile' && <Smartphone className="w-5 h-5 text-[#38F1B9]" />}
                    {type === 'both' && (
                        <div className="flex gap-2">
                            <Globe className="w-5 h-5 text-[#38F1B9]" />
                            <Smartphone className="w-5 h-5 text-[#38F1B9]" />
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-[#38F1B9] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

                {/* Technologies */}
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
}

export function LatestProjectsSection() {
    const { ref, isInView } = useInView();

    const projects = [
        {
            title: "E-commerce Platform",
            description: "A modern e-commerce solution with real-time inventory management and AI-powered recommendations.",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
            technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
            type: "web",
            link: "#",
        },
        {
            title: "Health & Fitness App",
            description: "Cross-platform mobile application for tracking workouts, nutrition, and wellness goals.",
            image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=60",
            technologies: ["React Native", "Firebase", "TypeScript"],
            type: "mobile",
        },
        {
            title: "Learning Management System",
            description: "Comprehensive platform for online education with video streaming and interactive assessments.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
            technologies: ["Next.js", "Tailwind", "Supabase"],
            type: "both",
            link: "#",
        },
    ];

    return (
        <div className="w-full bg-[#0c1534] py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div ref={ref} className={`text-center mb-12 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
                        Latest Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our recent work and see how we help businesses transform their ideas into reality
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} delay={200 * (index + 1)} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/projects"
                        className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-lg font-display font-bold text-white hover:bg-white/10 transition-all duration-200 ring-1 ring-white/10 hover:ring-[#38F1B9]/50"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}
