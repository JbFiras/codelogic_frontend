import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FloatingBackground } from './FloatingBackground';
import { Logo } from './Logo';

function FloatingImage({ src, alt, className, style }) {
    return (
        <div
            className={`rounded-2xl shadow-lg absolute floating-image-container ${className}`}
            style={style}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 rounded-2xl backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-white/3 rounded-2xl"></div>
            <Image
                src={src}
                alt={alt}
                className="relative z-10 w-full h-full object-contain floating-image"
                width={300}
                height={300}
                priority={true}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
        </div>
    );
}

export function HeroSection() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#0c1534] relative overflow-hidden">
            <FloatingBackground />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="min-h-screen flex flex-col lg:flex-row items-center py-6 sm:py-8 lg:py-0 lg:gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-white text-center lg:text-left mb-6 sm:mb-8 lg:mb-0 order-1 opacity-0 animate-slide-in-left pt-4 mt-8">
                        <h1
                            className="mb-4 sm:mb-6 opacity-0 animate-fade-in"
                            style={{ animationDelay: '0.2s' }}
                        >
                            <Logo className="text-4xl sm:text-5xl lg:text-6xl tracking-wider " />
                        </h1>
                        <p
                            className="font-display text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed tracking-wide opacity-0 animate-fade-in"
                            style={{ animationDelay: '0.4s' }}
                        >
                            A consulting firm specialized in
                            <br />
                            <code className="font-sans text-[#38F1B9] bg-[#38F1B9]/10 px-2 py-1 rounded">
                                &lt; software /&gt;
                            </code>
                            <span className="text-white"> solutions.</span>
                        </p>
                        <p
                            className="font-sans text-base sm:text-lg text-gray-400 mb-8 leading-relaxed opacity-0 animate-fade-in"
                            style={{ animationDelay: '0.6s' }}
                        >
                            At CODELOGIC, We engineer innovative solutions to transform <br />
                            your vision into a thriving reality.
                        </p>
                        <button
                            className="font-display text-sm tracking-wider px-6 sm:px-8 py-2.5 sm:py-3 bg-[#38F1B9] text-[#0c1534] rounded-lg font-bold hover:bg-[#38F1B9]/90 transition-all duration-200 shadow-lg shadow-[#38F1B9]/20 opacity-0 animate-fade-in"
                            style={{ animationDelay: '0.8s' }}
                            onClick={() => router.push('/contact')}
                        >
                            LET&#39;S TALK NOW
                        </button>
                    </div>

                    {/* Images Section */}
                    <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[700px] order-2 opacity-0 animate-slide-in-right">
                        <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] image-group">
                            <FloatingImage
                                src="/assets/mockups/mockup-card.svg"
                                alt="Card 1"
                                className="animate-float-slow"
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    top: '-15%',
                                    left: '-2%',
                                    transform: 'rotate(-8deg)',
                                    zIndex: 5,
                                }}
                            />
                            <FloatingImage
                                src="/assets/mockups/mockup-card2.svg"
                                alt="Card 2"
                                className="animate-float-medium"
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    top: '-12%',
                                    right: '-2%',
                                    transform: 'rotate(8deg)',
                                    zIndex: 4,
                                }}
                            />
                            <div className="flex flex-col justify-center items-center w-full h-full pt-64">
                                <FloatingImage
                                    src="/assets/mockups/mockup2-bg.svg"
                                    alt="Background 1"
                                    className="animate-float-fast"
                                    style={{
                                        width: '280px',
                                        height: '180px',
                                        transform: 'rotate(-2deg)',
                                        zIndex: 3,
                                    }}
                                />
                                <FloatingImage
                                    src="/assets/mockups/mockup3-bg.svg"
                                    alt="Background 2"
                                    className="animate-float-medium"
                                    style={{
                                        width: '260px',
                                        height: '160px',
                                        transform: 'rotate(2deg)',
                                        zIndex: 2,
                                    }}
                                />
                                <FloatingImage
                                    src="/assets/mockups/mockup-content.svg"
                                    alt="Content"
                                    className="animate-float-slow"
                                    style={{
                                        width: '240px',
                                        height: '140px',
                                        transform: 'rotate(-1deg)',
                                        zIndex: 1,
                                    }}
                                />
                            </div>
                        </div>

                        <div className="hidden lg:block w-full h-full image-group">
                            <FloatingImage
                                src="/assets/mockups/mockup-card.svg"
                                alt="Card 1"
                                className="animate-float-slow"
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    top: '0%',
                                    left: '0%',
                                    transform: 'rotate(-12deg)',
                                    zIndex: 5
                                }}
                            />
                            <FloatingImage
                                src="/assets/mockups/mockup-card2.svg"
                                alt="Card 2"
                                className="animate-float-medium"
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    top: '0%',
                                    right: '0%',
                                    transform: 'rotate(12deg)',
                                    zIndex: 4
                                }}
                            />
                            <FloatingImage
                                src="/assets/mockups/mockup2-bg.svg"
                                alt="Background 1"
                                className="animate-float-fast"
                                style={{
                                    width: '500px',
                                    height: '300px',
                                    top: '35%',
                                    left: '15%',
                                    transform: 'rotate(-25deg)',
                                    zIndex: 3
                                }}
                            />
                            <FloatingImage
                                src="/assets/mockups/mockup3-bg.svg"
                                alt="Background 2"
                                className="animate-float-medium"
                                style={{
                                    width: '450px',
                                    height: '270px',
                                    top: '60%',
                                    left: '10%',
                                    transform: 'rotate(20deg)',
                                    zIndex: 2
                                }}
                            />
                            <FloatingImage
                                src="/assets/mockups/mockup-content.svg"
                                alt="Content"
                                className="animate-float-slow"
                                style={{
                                    width: '400px',
                                    height: '240px',
                                    top: '85%',
                                    left: '20%',
                                    transform: 'rotate(-18deg)',
                                    zIndex: 1
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;