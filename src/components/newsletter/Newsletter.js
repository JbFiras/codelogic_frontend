"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import animationDataCelebration from "./newsletter_celebration.json";
import animationDataRightSide from "./newsletter_right_section.json";
import { toast } from "react-toastify";
import ButtonReactive from "@/components/Buttons/ButtonReactive";
import axios from "axios";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function Newsletter() {
    const [animationVisible, setAnimationVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [shake, setShake] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    useEffect(() => {
        // Trigger entrance animation on mount
        setIsVisible(true);
    }, []);

    const validateEmail = (email) => {
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        setIsEmailValid(validateEmail(inputEmail));
    };

    const showAnimation = () => {
        setAnimationVisible(true);
        setTimeout(() => {
            setAnimationVisible(false);
        }, 3000);
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (isSubmitting || !isEmailValid) return;

        setIsSubmitting(true);
        try {
            const response = await axios.post("https://api.codelogic.tn/api/v1/subscribe/", {
                email: email,
            });

            if (response.status === 201) {
                showAnimation();
                toast.success("Email added successfully.");
                setEmail(""); // Clear the input
                setIsEmailValid(false); // Reset validation state
            }
        } catch (error) {
            if (error.response?.status === 400) {
                toast.warn("Your Email is already subscribed!");
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } finally {
            setTimeout(() => setIsSubmitting(false), 4000); // Allow time for animations
        }
    };

    return (
        <div
            className={`flex justify-center items-center transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <div className="container mx-auto flex justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-white text-3xl lg:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
                            SUBSCRIBE TO OUR <span className="text-[#38F1B9] animate-pulse">NEWSLETTER</span>!
                        </h1>
                        <p className="text-white mb-6 hover:text-gray-300 transition-colors duration-300">
                            You will never miss important product updates, latest news, and community QA sessions.
                        </p>
                        <form onSubmit={handleSubscribe} className="group">
                            <div className="flex flex-col lg:flex-row items-center gap-4">
                                <div
                                    className={`w-full lg:w-2/3 transform transition-transform duration-300 ${
                                        shake ? "animate-shake" : ""
                                    }`}
                                >
                                    <input
                                        type="email"
                                        name="newsletter_email"
                                        id="newsletter_email"
                                        className="w-full rounded-lg px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-800 text-white placeholder-white"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </div>
                                <div
                                    className={`relative w-full lg:w-2/3 transform transition-transform duration-300 ${
                                        animationVisible ? "animate-bounce" : ""
                                    }`}
                                >
                                    {animationVisible && (
                                        <div className="absolute inset-0 flex justify-center items-center z-10">
                                            <Lottie
                                                animationData={animationDataCelebration}
                                                loop
                                                autoplay
                                            />
                                        </div>
                                    )}
                                    <ButtonReactive
                                        type="submit"
                                        disabled={!isEmailValid || isSubmitting}
                                        autoRedirect={false}
                                        text={
                                            isSubmitting
                                                ? "Subscribing..."
                                                : "Subscribe to our newsletter"
                                        }
                                        className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className="relative flex justify-center items-center h-1/2 mt-6 hover:scale-105 transition-transform duration-500">
                        <Lottie
                            animationData={animationDataRightSide}
                            loop
                            autoplay
                            style={{
                                width: "50%",
                                maxWidth: "450px",

                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
