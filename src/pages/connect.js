"use client";
import React, { useState } from "react";
import Globe from "@/components/ui/Globe";
import HeaderNavbar from "@/components/HeaderNavbar";
import ButtonReactive from "@/components/Buttons/ButtonReactive";

export default function Connect() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        const updatedData = { ...formData, [id]: value };

        setFormData(updatedData);

        // Validate form: Email and Message are required
        setIsFormValid(
            updatedData.email.trim() !== "" &&
            updatedData.message.trim() !== "" &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedData.email) // Basic email validation
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add further API logic for form submission here
    };
    return (
        <>
            <HeaderNavbar />
            <div
                className="container-fluid text-ligh">
                <div className="row justify-content-center align-items-center">
                    {/* Left Column: Connect Form */}
                    <div className="col-12 col-xl-5 mb-5 mb-xl-0">
                        <div
                            className="bg-gradient p-4 shadow rounded text-white"
                            style={{ maxWidth: "500px", margin: "0 auto" }}
                        >
                            <h2 className="mb-4 text-center">Contact Us</h2>
                            <p className="text-center mb-4">
                                Let's get the conversation started. Fill the form below and we'll get in touch as soon as we can.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        aria-label="Your email address"
                                        aria-required="true"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        aria-label="Your name"
                                        aria-required="true"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="company" className="form-label">
                                        Company <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="form-control"
                                        placeholder="Company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        aria-label="Company name"
                                        aria-required="true"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Your Message{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        className="form-control"
                                        rows={4}
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        aria-label="Your message"
                                        aria-required="true"
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center mt-4">
                                    <ButtonReactive autoRedirect={false} type="submit" disabled={true}
                                                    text={"CONTACT US"}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="globe-container d-none d-lg-block ">
                            <Globe/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
