"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CodePreview({ code, language, direction }) {
    const variants = {
        enter: (direction) => ({
            x: direction === "right" ? "100vw" : "-100vw", // Moves the entire screen width
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction === "right" ? "-100vw" : "100vw", // Moves the entire screen width
            opacity: 0,
        }),
    };

    useEffect(() => {
        if (window.Prism) {
            window.Prism.highlightAll();
        }
    }, [code]);

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    return (
        <motion.div
            custom={direction}
            variants={!isMobile ? variants : undefined} // Disable animation on mobile
            initial={!isMobile ? "enter" : undefined}
            animate={!isMobile ? "center" : undefined}
            exit={!isMobile ? "exit" : undefined}
            transition={!isMobile ? {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            } : undefined}
            className="mt-4 w-full col-span-full"
        >
            <div className="rounded-lg overflow-hidden shadow-[0_0_20px_rgba(189,147,249,0.3)] border border-[#bd93f9] transition-all duration-300 hover:shadow-[0_0_30px_rgba(189,147,249,0.5)] backdrop-blur-sm">
                {/* macOS-style window header */}
                <div className="h-8 bg-[#282a36] flex items-center px-4 border-b border-[#44475a]">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5555] shadow-[0_0_10px_rgba(255,85,85,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-[#f1fa8c] shadow-[0_0_10px_rgba(241,250,140,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-[#50fa7b] shadow-[0_0_10px_rgba(80,250,123,0.5)]" />
                    </div>
                    <div className="ml-4 text-xs text-[#6272a4] font-mono">
                        {
                            language === "typescript"
                                ? "index.ts"
                                : language === "hcl"
                                    ? "main.tf"
                                    : language === "python"
                                        ? "main.py"
                                        : "index.js"
                        }
                    </div>
                </div>

                {/* Code content with Prism.js syntax highlighting */}
                <div className="p-6 bg-[#282a36] relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#bd93f9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="h-[300px] overflow-y-auto overflow-x-auto">
            <pre className={`language-${language} !bg-transparent !m-0 relative z-10`}>
              <code className={`language-${language} !bg-transparent !p-0 whitespace-pre`}>
                {code}
              </code>
            </pre>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
