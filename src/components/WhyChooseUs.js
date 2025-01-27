import React from "react";
import Image from "next/image";
import { CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Feature({ title, description, delay, accentColor = '[#38F1B9]' }) {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`flex gap-4 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex-shrink-0">
                <CheckCircle2
                    className={`w-6 h-6 text-${accentColor} transform group-hover:scale-110 transition-transform duration-300`}
                    strokeWidth={1.5}
                />
            </div>
            <div>
                <h3 className="text-white font-display text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
}

export function WhyChooseUs({
                                title,
                                subtitle,
                                features,
                                imageSrc,
                                imageAlt,
                                className = '',
                                accentColor = '[#38F1B9]'
                            }) {
    const { ref: imageRef, isInView: imageIsInView } = useInView();
    const { ref: contentRef, isInView: contentIsInView } = useInView();

    return (
        <div className={`w-full bg-[#0c1534] py-20 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div
                        ref={imageRef}
                        className={`w-full lg:w-1/2 opacity-0 ${imageIsInView ? 'animate-slide-in-left' : ''}`}
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width='600'
                            height='600'
                            className={`rounded-2xl shadow-2xl ring-1 ring-white/10 transform hover:scale-[1.02] transition-transform duration-500 hover:ring-${accentColor}/50`}
                        />
                    </div>
                    <div
                        ref={contentRef}
                        className={`w-full lg:w-1/2 opacity-0 ${contentIsInView ? 'animate-slide-in-right' : ''}`}
                        style={{ animationDelay: '200ms' }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-6">
                            {title}
                        </h2>
                        <p className="text-gray-400 mb-8">
                            {subtitle}
                        </p>
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <Feature
                                    key={index}
                                    {...feature}
                                    delay={400 + (200 * index)}
                                    accentColor={accentColor}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}