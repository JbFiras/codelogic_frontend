import React from 'react';
import { Blocks, Pocket as Docker, Github, GitBranch, Database, Cloud, Lamp as Lambda, Lock, Code2, Workflow, Box, Network, Gitlab, Terminal } from 'lucide-react';

function TechIcon({ icon, name }) {
    return (
        <div className="flex flex-col items-center justify-center min-w-[120px] group">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 shadow-lg group-hover:ring-[#38F1B9]/50 group-hover:bg-white/10 transition-all duration-300">
                {React.cloneElement(icon, {
                    className: "w-6 h-6 text-[#38F1B9] group-hover:scale-110 transition-transform duration-300",
                    strokeWidth: 1.5,
                })}
            </div>
            <span className="mt-2 text-sm text-gray-400 group-hover:text-[#38F1B9] transition-colors duration-300">
        {name}
      </span>
        </div>
    );
}

export function TechStack() {
    const technologies = [
        { icon: <Blocks />, name: "Kubernetes" },
        { icon: <Docker />, name: "Docker" },
        { icon: <Cloud />, name: "AWS" },
        { icon: <Lambda />, name: "Lambda" },
        { icon: <Lock />, name: "Security" },
        { icon: <Code2 />, name: "React" },
        { icon: <Terminal />, name: "Django" },
        { icon: <Database />, name: "MySQL" },
        { icon: <Network />, name: "DevOps" },
        { icon: <Box />, name: "CI/CD" },
        { icon: <Workflow />, name: "Jenkins" },
        { icon: <Github />, name: "GitHub" },
        { icon: <Gitlab />, name: "GitLab" },
        { icon: <GitBranch />, name: "Git Flow" },
    ];

    return (
        <div className="w-full bg-[#0c1534] py-16 sm:py-20 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0c1534] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0c1534] to-transparent z-10"></div>

            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-center font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
                    Cutting-edge Technologies
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Empowering businesses with advanced tools and innovative technologies tailored to their unique needs.
                </p>
            </div>

            <div className="relative flex gap-8 overflow-x-auto pb-8 px-4 sm:px-6 no-scrollbar">
                <div className="flex gap-8 animate-scroll">
                    {technologies.map((tech, index) => (
                        <TechIcon key={index} {...tech} />
                    ))}
                </div>
                <div className="flex gap-8 animate-scroll" aria-hidden="true">
                    {technologies.map((tech, index) => (
                        <TechIcon key={`duplicate-${index}`} {...tech} />
                    ))}
                </div>
            </div>
        </div>
    );
}