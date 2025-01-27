'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import PageHeader from '@/components/PageHeader';
import GenericCta from '@/components/GenericCta';

function Select({ label, options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <label className="block text-gray-400 mb-2">{label}</label>
            <div
                className="relative bg-white/5 backdrop-blur-sm rounded-lg ring-1 ring-white/10 hover:ring-[#38F1B9]/50 transition-all duration-300 cursor-pointer h-[52px]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="px-4 py-3 flex items-center justify-between h-full">
          <span className="text-gray-300">
            {value ? options.find(opt => opt.value === value)?.label : 'Choose'}
          </span>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
                {isOpen && (
                    <div className="fixed z-[100] w-[calc(100%-2rem)] left-4 right-4 lg:absolute lg:w-full lg:left-0 lg:right-0 mt-1">
                        <div className="bg-[#000] rounded-lg ring-1 ring-white/20 shadow-lg max-h-[240px] overflow-y-auto">
                            {options.map((option, index) => (
                                <div
                                    key={option.value}
                                    className={`px-4 py-3 text-gray-200 hover:bg-gray-700 cursor-pointer ${
                                        index === 0 ? 'rounded-t-lg' : ''
                                    } ${index === options.length - 1 ? 'rounded-b-lg' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onChange(option.value);
                                        setIsOpen(false);
                                    }}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function PricingPage() {
    const [goal, setGoal] = useState('');
    const [platform, setPlatform] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [duration, setDuration] = useState('');

    const goalOptions = [
        { value: 'product', label: 'Product development from scratch' },
        { value: 'ui', label: 'UI/UX design' },
        { value: 'mvp', label: 'MVP development' },
        { value: 'qa', label: 'Quality assurance' },
        { value: 'all', label: 'All of them' }
    ];

    const platformOptions = [
        { value: 'web', label: 'Web' },
        { value: 'mobile', label: 'Mobile' },
        { value: 'all', label: 'All of them' }
    ];

    const teamSizeOptions = [
        { value: '1-3', label: '1-3 developers' },
        { value: '3-5', label: '3-5 developers' },
        { value: '5-10', label: '5-10 developers' },
        { value: '10+', label: '10+ developers' }
    ];

    const durationOptions = [
        { value: '1-3', label: '1-3 months' },
        { value: '3-6', label: '3-6 months' },
        { value: '6-12', label: '6-12 months' },
        { value: 'uncertain', label: 'An uncertain period' }
    ];

    return (
        <div className="min-h-screen bg-[#0c1534] pt-20">
            <PageHeader
                title="Pricing Plans"
                description="Flexible pricing options tailored to your needs. Choose the plan that works best for your business."
            />

            <FeatureHighlights />

            <div className="container mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col h-full">
                        <div className="mb-6 text-center">
                            <h2 className="text-3xl font-bold text-white font-display mb-2">
                                End-to-end development
                            </h2>
                            <h3 className="text-xl font-bold text-white font-display mb-4">
                                Outsource your software project
                            </h3>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-400 mb-3">Our services include:</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
                                    UI design
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
                                    Web & mobile development
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
                                    Product management
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
                                    Quality assurance
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
                                    DevOps and Cloud
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto space-y-4">
                            <Select
                                label="What goal are you pursuing?"
                                options={goalOptions}
                                value={goal}
                                onChange={setGoal}
                            />
                            <Select
                                label="Your project platform:"
                                options={platformOptions}
                                value={platform}
                                onChange={setPlatform}
                            />
                            <button
                                className="w-full px-8 py-4 bg-[#38F1B9] text-[#0c1534] rounded-lg font-display font-bold hover:bg-[#38F1B9]/90 transition-all duration-200 shadow-lg shadow-[#38F1B9]/20"
                                disabled={true}
                            >
                                Get a Quote
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col h-full">
                        <div className="mb-6 text-center">
                            <h2 className="text-3xl font-bold text-white font-display mb-2">
                                Dedicated developers
                            </h2>
                            <h3 className="text-xl font-bold text-white font-display mb-4">
                                Hire expert developers fast and easy
                            </h3>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-400 mb-3">Our services include:</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
                                    5-step talent selection process
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
                                    Staffing in under 1 month
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
                                    Developers onboarding
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38F1B9]"></span>
                                    Administration (office, HR, accounting)
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto space-y-4">
                            <Select
                                label="How many developers do you need?"
                                options={teamSizeOptions}
                                value={teamSize}
                                onChange={setTeamSize}
                            />
                            <Select
                                label="How long for?"
                                options={durationOptions}
                                value={duration}
                                onChange={setDuration}
                            />
                            <button
                                className="w-full px-8 py-4 bg-[#38F1B9] text-[#0c1534] rounded-lg font-display font-bold hover:bg-[#38F1B9]/90 transition-all duration-200 shadow-lg shadow-[#38F1B9]/20"
                                disabled={true}
                            >
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <GenericCta
                title="Not sure what you need?"
                description="Schedule a free consultation with our experts to discuss your project requirements and find the best solution for your business."
                buttons={[
                    {
                        text: 'Schedule Consultation',
                        variant: 'primary',
                    },
                    {
                        text: 'Contact Sales',
                        variant: 'secondary',
                    },
                ]}
                className="pb-12"
            />
        </div>
    );
}