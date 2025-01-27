import React from 'react';
import { useInView } from '../hooks/useInView';

const PageHeader = ({ title, description, className = '' }) => {
    const { ref: headerRef, isInView: headerIsInView } = useInView();

    return (
        <div
            ref={headerRef}
            className={`py-6 relative overflow-hidden opacity-0 ${headerIsInView ? 'animate-fade-in' : ''} ${className}`}
        >
            <div className="absolute inset-0 bg-[#38F1B9]/5"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1534] via-transparent to-[#0c1534]"></div>

            <div className="container mx-auto px-4 sm:px-6 relative">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white font-display mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;