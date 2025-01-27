'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import GenericCta from './GenericCta';

const CtaSection = () => {
    return (
        <GenericCta
            title="Ready to Start Your Project?"
            description="Let's transform your ideas into reality. Our team of experts is ready to help you build the perfect solution for your business."
            buttons={[
                {
                    text: "Get Started",
                    icon: <ArrowRight className="w-5 h-5" />,
                    variant: "primary"
                },
                {
                    text: "Contact Sales",
                    variant: "secondary"
                }
            ]}
            gradientFrom="[#38F1B9]/20"
            gradientTo="transparent"
            accentColor="[#38F1B9]"
            className="relative"
        />
    );
};

export default CtaSection;
