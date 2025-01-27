import React from 'react';
import { useInView } from '../hooks/useInView';
import { Lightbulb, Code2, Rocket, Repeat2 } from 'lucide-react';

function ProcessStep({ icon, number, title, description, delay }) {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`relative flex flex-col items-center text-center opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="w-16 h-16 rounded-2xl bg-[#38F1B9]/10 flex items-center justify-center mb-4 group-hover:bg-[#38F1B9]/20 transition-colors duration-300">
                {React.cloneElement(icon, {
                    className: "w-8 h-8 text-[#38F1B9]",
                    strokeWidth: 1.5,
                })}
            </div>
            <div className="absolute -top-3 right-0 w-8 h-8 rounded-full bg-[#38F1B9] text-[#0c1534] font-display font-bold flex items-center justify-center">
                {number}
            </div>
            <h3 className="text-xl font-bold text-white font-display mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}

export default function ProcessSection() {
    const { ref, isInView } = useInView();

    const steps = [
        {
            icon: <Lightbulb />,
            number: "1",
            title: "Discovery",
            description: "We analyze your needs and create a comprehensive project roadmap."
        },
        {
            icon: <Code2 />,
            number: "2",
            title: "Development",
            description: "Our expert team brings your vision to life with clean, efficient code."
        },
        {
            icon: <Rocket />,
            number: "3",
            title: "Deployment",
            description: "We ensure smooth deployment and provide thorough testing."
        },
        {
            icon: <Repeat2 />,
            number: "4",
            title: "Support",
            description: "Ongoing maintenance and support to keep your solution running perfectly."
        }
    ];

    return (
        <div className="w-full bg-[#0c1534] py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div ref={ref} className={`text-center mb-12 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
                        How We Work
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our proven development process ensures successful project delivery
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            {...step}
                            delay={200 * (index + 1)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
