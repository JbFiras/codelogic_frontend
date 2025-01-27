import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

export function Navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = () => {
        router.push('/contact');
    };

    return (
        <nav className="w-full bg-[#0c1534] py-4 fixed top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    {/* Hamburger Menu for Tablet/Mobile */}
                    <div className="lg:hidden">
                        <button
                            className="text-white hover:text-[#38F1B9] focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <div
                        className={`${
                            isMenuOpen ? 'block' : 'hidden'
                        } lg:flex items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-[#0c1534] lg:bg-transparent z-40 shadow-md lg:shadow-none`}
                    >
                        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 px-4 lg:px-0 py-4 lg:py-0">
                            {navItems.map((item) => (
                                <div key={item.path} className="relative">
                                    <Link
                                        href={item.path}
                                        className={`block ${
                                            router.pathname === item.path ? 'text-white' : 'text-gray-400'
                                        } hover:text-white transition-colors duration-200 font-display px-4 py-2 lg:p-0`}
                                    >
                                        {item.name}
                                        {router.pathname === item.path && (
                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                                                <svg
                                                    width="37"
                                                    height="8"
                                                    viewBox="0 0 37 8"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="animate-fade-in"
                                                >
                                                    <path
                                                        d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                                                        stroke="#38F1B9"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="animate-draw"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </Link>
                                </div>
                            ))}

                            {/* Mobile/Tablet CTA Button */}
                            <button
                                onClick={handleNavigate}
                                className="w-full mt-4 px-6 py-2 bg-[#38F1B9] text-[#0c1534] rounded-lg font-display font-bold hover:bg-[#38F1B9]/90 transition-all duration-200 shadow-lg shadow-[#38F1B9]/20 lg:hidden"
                            >
                                Start New Project
                            </button>
                        </div>
                    </div>

                    {/* Desktop CTA Button */}
                    <button
                        onClick={handleNavigate}
                        className="hidden lg:block px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 bg-[#38F1B9] text-[#0c1534] rounded-lg font-display font-bold hover:bg-[#38F1B9]/90 transition-all duration-200 shadow-lg shadow-[#38F1B9]/20"
                    >
                        Start New Project
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;