import { WhyChooseUs } from './WhyChooseUs';

export default function FeaturesSection() {
    const features = [
        {
            title: "Agile Development",
            description: "Iterative approach with continuous feedback and improvements throughout the development process."
        },
        {
            title: "Scalable Architecture",
            description: "Future-proof solutions designed to grow with your business needs."
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock technical support and maintenance for your peace of mind."
        },
        {
            title: "Security First",
            description: "Built-in security measures and best practices to protect your data and users."
        }
    ];

    return (
        <WhyChooseUs
            title="Why Choose Us?"
            subtitle="We combine technical expertise with industry best practices to deliver exceptional results."
            features={features}
            imageSrc="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Next.js requires the path to be relative to the public directory
            imageAlt="Team collaboration"
        />
    );
}
