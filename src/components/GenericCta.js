import React from 'react';
import { useInView } from '../hooks/useInView';

const GenericCta = ({
                        title,
                        description,
                        buttons,
                        className = '',
                        gradientFrom = '[#38F1B9]/20',
                        gradientTo = 'transparent',
                        accentColor = '[#38F1B9]'
                    }) => {
    const { ref: containerRef, isInView: containerIsInView } = useInView();
    const { ref: contentRef, isInView: contentIsInView } = useInView();
    const { ref: buttonsRef, isInView: buttonsIsInView } = useInView();

    return (
        <div className={`w-full bg-[#0c1534] py-20 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6">
                <div
                    ref={containerRef}
                    className={`relative bg-gradient-to-br from-${gradientFrom} to-${gradientTo} backdrop-blur-sm rounded-2xl p-8 sm:p-12 ring-1 ring-${accentColor}/20 opacity-0 ${containerIsInView ? 'animate-fade-in' : ''} hover:from-${accentColor}/30 transition-all duration-500 overflow-hidden group`}
                    style={{ animationDelay: '200ms' }}
                >
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Light reflection effect */}
                    <div className="absolute -inset-[500px] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-1000px] group-hover:translate-x-[1000px] transition-transform duration-1000 ease-in-out"></div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                        <div
                            ref={contentRef}
                            className={`opacity-0 ${contentIsInView ? 'animate-slide-in-left' : ''}`}
                            style={{ animationDelay: '400ms' }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
                                {title}
                            </h2>
                            <p className="text-gray-300 max-w-xl">
                                {description}
                            </p>
                        </div>
                        <div
                            ref={buttonsRef}
                            className={`flex flex-col sm:flex-row gap-4 opacity-0 ${buttonsIsInView ? 'animate-slide-in-right' : ''}`}
                            style={{ animationDelay: '600ms' }}

                        >
                            {buttons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={button.onClick}
                                    className={`relative px-8 py-3 rounded-lg font-display font-bold transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 overflow-hidden group/button ${
                                        button.variant === 'primary'
                                            ? `bg-${accentColor} text-[#0c1534] hover:bg-${accentColor}/90 shadow-lg shadow-${accentColor}/20`
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                >
                                    {/* Button glossy effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-white/5 to-white/10 opacity-0 group-hover/button:opacity-100 transition-opacity duration-200"></div>
                                    {/* Button content */}
                                    <span className="relative z-10 flex items-center gap-2">
                    {button.text}
                                        {button.icon}
                  </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenericCta;