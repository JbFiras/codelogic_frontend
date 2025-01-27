'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Heart, Zap, Shield } from 'lucide-react';
import GenericCta from '../components/GenericCta';
import { useInView } from '../hooks/useInView';
import PageHeader from '../components/PageHeader';

function Stat({ number, label, delay }) {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`text-center opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="text-4xl sm:text-5xl font-bold text-[#38F1B9] font-display mb-2">
                {number}
            </div>
            <div className="text-gray-400">{label}</div>
        </div>
    );
}

function ValueCard({ icon, title, description, delay }) {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 hover:ring-[#38F1B9]/50 transition-all duration-300 group opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#38F1B9]/10 mb-4 group-hover:bg-[#38F1B9]/20 transition-colors duration-300">
                {React.cloneElement(icon, {
                    className: "w-6 h-6 text-[#38F1B9] transform group-hover:scale-110 transition-transform duration-300",
                    strokeWidth: 1.5
                })}
            </div>
            <h3 className="text-white font-display text-xl font-bold mb-2 group-hover:text-[#38F1B9] transition-colors duration-300">{title}</h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        </div>
    );
}

export default function AboutPage() {
    const { ref: storyRef, isInView: storyIsInView } = useInView();

    const stats = [
        { number: "20+", label: "Projects in Progress" },
        { number: "50+", label: "Happy Clients" },
        { number: "15+", label: "Tech Stack" },
        { number: "24/7", label: "Support Available" }
    ];

    const values = [
        {
            icon: <Heart />,
            title: "Passion",
            description: "We're passionate about creating exceptional software solutions that make a real difference."
        },
        {
            icon: <Target />,
            title: "Excellence",
            description: "We strive for excellence in everything we do, from code quality to client communication."
        },
        {
            icon: <Zap />,
            title: "Innovation",
            description: "We embrace new technologies and innovative approaches to solve complex challenges."
        },
        {
            icon: <Shield />,
            title: "Integrity",
            description: "We maintain the highest standards of integrity and transparency in all our dealings."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0c1534] pt-20">
            <PageHeader
                title="Our Story"
                description="Building the future of software development, one line of code at a time."
            />

            {/* Story Section */}
            <div className="container mx-auto px-4 sm:px-6 py-20">
                <div
                    ref={storyRef}
                    className={`flex flex-col lg:flex-row items-center gap-12 opacity-0 ${storyIsInView ? 'animate-fade-in' : ''}`}
                >
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
                            alt="Team collaboration"
                            className="rounded-2xl shadow-2xl ring-1 ring-white/10 transform hover:scale-[1.02] transition-transform duration-500 hover:ring-[#38F1B9]/50"
                            width={800}
                            height={600}
                            priority
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-6">
                            Who We Are
                        </h2>
                        <div className="space-y-6 text-gray-400">
                            <p>
                                Founded in 2023, CODELOGIC emerged from a vision to revolutionize software development
                                with fresh perspectives and innovative solutions. Our journey began with a team of
                                passionate developers committed to delivering exceptional digital experiences.
                            </p>
                            <p>
                                Today, we are rapidly growing and making our mark in the industry, helping businesses
                                of all sizes transform their ideas into reality through cutting-edge technology and
                                exceptional craftsmanship.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-4 sm:px-6 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Stat
                            key={index}
                            {...stat}
                            delay={200 * (index + 1)}
                        />
                    ))}
                </div>
            </div>

            {/* Values Section */}
            <div className="container mx-auto px-4 sm:px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-6">
                        Our Values
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        These core values guide everything we do, from how we develop software
                        to how we interact with our clients and each other.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            {...value}
                            delay={200 * (index + 1)}
                        />
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <GenericCta
                title="Join Our Journey"
                description="Whether you're looking to build something amazing or join our team, we'd love to hear from you."
                buttons={[
                    {
                        text: "View Career Opportunities",
                        variant: "primary"
                    },
                    {
                        text: "Contact Us",
                        variant: "secondary"
                    }
                ]}
                className="pb-20"
            />
        </div>
    );
}
