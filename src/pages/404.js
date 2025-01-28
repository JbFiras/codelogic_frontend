// pages/404.js
import React from "react";
import { useRouter } from "next/router";
import { Ghost, HomeIcon, ArrowLeft } from 'lucide-react';

export default function Custom404() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                <div className="mb-8 relative">
                    <Ghost className="w-24 h-24 mx-auto text-[#38F1B9] animate-float"/>
                    <div
                        className="absolute -bottom-4 w-16 h-3 bg-[#38F1B9]/20 rounded-full blur-sm mx-auto left-0 right-0 animate-float-shadow"/>
                </div>

                <h1 className="text-9xl font-bold text-[#38F1B9] mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
                <p className="text-white mb-8 max-w-md mx-auto">
                    Oops! It seems like you've ventured into uncharted territory. The page you're looking for has gone
                    ghosting.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center justify-center px-6 py-3 border border-[#38F1B9] text-base font-medium rounded-md text-[#38F1B9] hover:bg-[#38F1B9]/10 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2"/>
                        Go Back
                    </button>
                    <button
                        onClick={() => router.push('/')}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#0c1534] bg-[#38F1B9] hover:bg-[#2dd4a7] transition-colors duration-300"
                    >
                        <HomeIcon className="w-5 h-5 mr-2"/>
                        Return Home
                    </button>
                </div>
            </div>
        </div>
    );
}

