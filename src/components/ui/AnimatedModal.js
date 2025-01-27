"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedModal() {
    const images = [
        "https://images.unsplash.com/photo-1528820624198-03cf9845bec0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // A team working on laptops
        "https://images.unsplash.com/photo-1573165759995-5865a394a1aa?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Open office space with computers
        "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Close-up of code on a laptop
        "https://images.unsplash.com/photo-1599837565318-67429bde7162?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Developer coding on a computer
        "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=2878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Multiple screens showing code
    ];

    return (
        (<div className="py-20">
            <Modal>
                <ModalTrigger
                    className=" flex justify-center group/modal-btn">
                    <a
                        className="font-display text-sm tracking-wider px-6 sm:px-8 py-2.5 sm:py-3 bg-[#38F1B9] text-[#0c1534] rounded-lg font-bold hover:bg-[#38F1B9]/90 transition-all duration-200 shadow-lg shadow-[#38F1B9]/20 opacity-0 animate-fade-in"
                        style={{animationDelay: '0.8s'}}
                    >
                        LET&#39;S TALK NOW
                    </a>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4
                            className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Start on-boarding process now!
                        </h4>
                        <div className="flex justify-center items-center">
                            {images.map((image, idx) => (
                                <motion.div
                                    key={"images" + idx}
                                    style={{
                                        rotate: Math.random() * 20 - 10,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    whileTap={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                                >
                                    <Image
                                        src={image}
                                        alt="bali images"
                                        width="500"
                                        height="500"
                                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                                    />
                                </motion.div>
                            ))}
                        </div>
                        <form className="space-y-4 max-w-sm mx-auto mt-4">
                            <div id="step-1" className="space-y-6">
                                <h1 className="text-center text-neutral-700 dark:text-neutral-300 font-medium mb-4">
                                    Select an option to get started
                                </h1>
                                <div className="flex justify-around">
                                    <div
                                        className="flex flex-col items-center cursor-pointer p-4 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-blue-100 dark:hover:bg-neutral-700 focus:outline-none"
                                        role="button">
                                        <div className="mb-2">
                                            <link
                                                href="/icons/end-to-end-development.svg"
                                                rel="icon"
                                                className="h-12 w-12 text-blue-600"
                                            />
                                        </div>
                                        <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                        End-to-end development<br/>Outsource your software project
                    </span>
                                    </div>
                                    <div
                                        className="flex flex-col items-center cursor-pointer p-4 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-blue-100 dark:hover:bg-neutral-700 focus:outline-none"
                                        role="button">
                                        <div className="mb-2">
                                            <link
                                                href="/icons/dedicated-developers.svg"
                                                rel="icon"
                                                className="h-12 w-12 text-blue-600"
                                            />
                                        </div>
                                        <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                        Dedicated developers<br/>Hire expert developers fast and easy
                    </span>
                                    </div>
                                </div>
                            </div>

                            <div id="step-2" className="hidden space-y-4">
                            </div>

                            <div className="flex items-center justify-center mt-6">
                                <button
                                    type="button"
                                    id="next-step"
                                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Next
                                </button>
                            </div>
                        </form>
                    </ModalContent>

                    <ModalFooter className="gap-4">
                        <button
                            className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                            Cancel
                        </button>
                        <button
                            className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                            Book Now
                        </button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>)
    );
}




