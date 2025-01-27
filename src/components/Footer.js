import React from 'react';
import { Logo } from './Logo';
// import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#0c1534] border-t border-white/10 py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-2">
                        <Logo className="text-3xl mb-4" />
                        <p className="text-gray-400 max-w-md">
                            Empowering businesses with innovative software solutions. We transform ideas into exceptional digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-display font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Services', 'About', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-[#38F1B9] transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    {/* <div>
            <h3 className="text-white font-display font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#38F1B9] transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#38F1B9] transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#38F1B9] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#38F1B9] transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div> */}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} CODELOGIC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
