import React from 'react';
import { Code2, Database, Cloud, Shield, Smartphone, Globe } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

function ServiceCard({ icon, title, description, delay }) {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 hover:ring-[#38F1B9]/50 transition-all duration-300 group opacity-0 ${
                isInView ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#38F1B9]/10 mb-4 group-hover:bg-[#38F1B9]/20 transition-colors duration-300">
                {React.cloneElement(icon, {
                    className: 'w-6 h-6 text-[#38F1B9] transform group-hover:scale-110 transition-transform duration-300',
                    strokeWidth: 1.5,
                })}
            </div>
            <h3 className="text-white font-display text-xl font-bold mb-2 group-hover:text-[#38F1B9] transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {description}
            </p>
        </div>
    );
}

export function ServicesSection() {
    const { ref, isInView } = useInView();
    const services = [
        {
            icon: <Code2 />,
            title: 'Custom Software Development',
            description: 'Tailored solutions built from the ground up to meet your unique business requirements and challenges.',
        },
        {
            icon: <Database />,
            title: 'Database Architecture',
            description: 'Robust and scalable database solutions designed to handle your data efficiently and securely.',
        },
        {
            icon: <Cloud />,
            title: 'Cloud Solutions',
            description: 'Modern cloud infrastructure setup and management for optimal performance and reliability.',
        },
        {
            icon: <Shield />,
            title: 'Security Services',
            description: 'Comprehensive security measures to protect your applications and sensitive data.',
        },
        {
            icon: <Smartphone />,
            title: 'Mobile Development',
            description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
        },
        {
            icon: <Globe />,
            title: 'Web Applications',
            description: 'Responsive and dynamic web applications built with cutting-edge technologies.',
        },
    ];

    return (
        <div className="w-full bg-[#0c1534] py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div
                    ref={ref}
                    className={`text-center mb-12 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive software solutions tailored to your business needs
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} delay={200 * (index + 1)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
