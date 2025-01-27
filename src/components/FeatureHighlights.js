import React from 'react';
import { Sparkles, Clock, Shield } from 'lucide-react';

function Feature({ icon, title, description }) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#38F1B9]/10 flex items-center justify-center">
                    {React.cloneElement(icon, {
                        className: "w-6 h-6 text-[#38F1B9]",
                        strokeWidth: 1.5
                    })}
                </div>
            </div>
            <div>
                <h3 className="text-white font-display font-bold mb-1">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
        </div>
    );
}

export function FeatureHighlights() {
    const features = [
        {
            icon: <Sparkles />,
            title: "Quality Guaranteed",
            description: "Expert developers with proven track record in delivering successful projects"
        },
        {
            icon: <Clock />,
            title: "Fast Delivery",
            description: "Efficient development process to get your project up and running quickly"
        },
        {
            icon: <Shield />,
            title: "Secure & Reliable",
            description: "Enterprise-grade security and reliability for your peace of mind"
        }
    ];

    return (
        <div className="bg-[#0c1534] py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
                        Flexible Solutions for Your Business
                    </h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Choose between end-to-end development services or dedicated developers.
                        Our transparent pricing ensures you get the best value for your investment.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Feature key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
