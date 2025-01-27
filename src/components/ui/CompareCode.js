import React from "react";
import { Compare } from "@/components/ui/compare";
import {AnimatedModal} from "@/components/ui/AnimatedModal";

export function CompareCode() {
    return (
        <div className="p-4 rounded-3xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left Column */}
                <div className="flex justify-center md:w-1/2">
                    <Compare
                        firstImage="https://assets.aceternity.com/code-problem.png"
                        secondImage="https://assets.aceternity.com/code-solution.png"
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="h-80 w-64 md:h-[500px] md:w-[500px]" // Increased dimensions
                        slideMode="hover"
                        autoplay={true}
                    />
                </div>

                {/* Right Column */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
                        Discover <span className="text-[#38F1B9] animate-pulse">The Difference</span>!
                    </h1>
                    <p className="mb-4">
                        Welcome to <b>Codelogic</b>! We specialize in innovative solutions to your
                        technical challenges. At our core, we aim to transform complex problems
                        into elegant, efficient solutions that drive success and growth.
                    </p>
                    <p className="">
                        Join us on our journey to reshape the future of technology with creativity,
                        passion, and cutting-edge tools.<br/> Let's build something extraordinary together!
                    </p>
                    {/*<AnimatedModal />*/}
                </div>
            </div>
        </div>
    );
}
