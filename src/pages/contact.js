"use client";
import React, { useState } from "react";
import Globe from "@/components/ui/Globe";
import HeaderNavbar from "@/components/HeaderNavbar";

export default function Contact() {
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
        console.log("Form Submitted: ", formData);
        // You can add further API logic for form submission here
    };
    return (
        <>
            <HeaderNavbar />
            <div
                className="container-fluid text-light py-5 mt-5"
            >
                <div className="row justify-content-center align-items-center">
                    {/* Left Column: Contact Form */}
                    <div className="col-12 col-xl-5 mb-5 mb-xl-0">
                        <div
                            className="p-4 shadow rounded bg-white text-dark"
                            style={{ maxWidth: "500px", margin: "0 auto" }}
                        >
                            <h2 className="mb-4 text-center">Contact Us</h2>
                            <p className="text-center mb-4">
                                Leave your email and we will get back to you
                                within 24 hours.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
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
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        aria-label="Your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="message"
                                        className="form-label"
                                    >
                                        Your Message{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        className="form-control"
                                        rows={4}
                                        placeholder="Leave your message here..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        aria-label="Your message"
                                        aria-required="true"
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={!isFormValid}
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Globe: Visible on all screen sizes */}
                    <div className="col-12 col-xl-6">
                        <div className="globe-container">
                            <Globe />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
