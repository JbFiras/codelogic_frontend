'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MessageSquare, Clock, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CtaSection from "../components/CtaSection";
import { toast } from "react-toastify";

function ContactMethod({ icon, title, value, link, delay }) {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`flex items-start gap-4 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#38F1B9]/10">
                {React.cloneElement(icon, {
                    className: "w-6 h-6 text-[#38F1B9]",
                    strokeWidth: 1.5
                })}
            </div>
            <div>
                <h3 className="text-white font-display font-bold mb-1">{title}</h3>
                {link ? (
                    <a
                        href={link}
                        className="text-gray-400 hover:text-[#38F1B9] transition-colors duration-200"
                    >
                        {value}
                    </a>
                ) : (
                    <p className="text-gray-400">{value}</p>
                )}
            </div>
        </div>
    );
}

const Contact = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('https://api.codelogic.tn/api/v1/contact/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setResponseMessage('Your message has been sent successfully!');
            setFormData({
                full_name: '',
                email: '',
                subject: '',
                message: '',
            });
            toast.success("Your message has been sent successfully!");

        } catch (error) {
            setResponseMessage('Something went wrong. Please try again later.');
            if (error?.response?.status === 403){
                toast.error(error?.response?.data?.detail);
            }else{
                toast.error("Something went wrong, please try again.");

            }
            console.log(error?.response?.status === 403);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactMethods = [
        {
            icon: <MessageSquare />,
            title: "Chat with us",
            value: "Live chat available",
            link: "#"
        },
        {
            icon: <Mail />,
            title: "Email us",
            value: "contact@codelogic.tn",
            link: "mailto:contact@codelogic.tn"
        },
        {
            icon: <Phone />,
            title: "Call us",
            value: "+216 (55) 208-206",
            link: "tel:+21655208206"
        },
        {
            icon: <Clock />,
            title: "Working hours",
            value: "Mon - Fri, 9:00 - 17:00 UTC"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0c1534] pt-20">
            <PageHeader
                title="Contact Us"
                description="Get in touch with our team to discuss your project or any questions you may have."
            />

            {/* Contact Methods */}
            <div className="container mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactMethods.map((method, index) => (
                        <ContactMethod
                            key={index}
                            {...method}
                            delay={200 * (index + 1)}
                        />
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="container mx-auto px-4 sm:px-6 py-12">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10">
                        <h2 className="text-2xl font-bold text-white font-display mb-6">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="full_name"
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg ring-1 ring-white/10 focus:ring-[#38F1B9]/50 text-white placeholder-gray-500 outline-none transition-all duration-200"
                                    placeholder="Your Full name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg ring-1 ring-white/10 focus:ring-[#38F1B9]/50 text-white placeholder-gray-500 outline-none transition-all duration-200"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg ring-1 ring-white/10 focus:ring-[#38F1B9]/50 text-white placeholder-gray-500 outline-none transition-all duration-200"
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg ring-1 ring-white/10 focus:ring-[#38F1B9]/50 text-white placeholder-gray-500 outline-none transition-all duration-200 resize-none"
                                    placeholder="Your message..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-[#38F1B9] text-[#0c1534] rounded-lg font-display font-bold hover:bg-[#38F1B9]/90 transition-all duration-200 shadow-lg shadow-[#38F1B9]/20 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                        {responseMessage && (
                            <p className="mt-4 text-center text-gray-400">{responseMessage}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <CtaSection
                title="Ready to Start Your Project?"
                description="Schedule a consultation with our experts to discuss your requirements and explore how we can help."
                buttons={[
                    {
                        text: "Schedule Consultation",
                        variant: "primary"
                    },
                    {
                        text: "View Our Work",
                        variant: "secondary"
                    }
                ]}
                className="pb-20"
            />
        </div>
    );
};

export default Contact;
