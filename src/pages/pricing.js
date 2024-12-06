import React from "react";
import HeaderNavbar from "@/components/HeaderNavbar";
import IconCarousel from "@/components/LandingPage/heroSection/IconCarousel";
import NewsletterBanner from "@/components/newsletter/banner/newsletterBanner";

export default function Pricing() {
    return (
        <>
            <HeaderNavbar/>
            <div className="container py-5">
                <h2 className="text-center mb-5">Pricing</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card shadow h-100">
                            <div className="card-header text-center bg-black text-white">
                                End-to-end development
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Outsource your software project</h5>
                                <p className="card-text">Our services include:</p>
                                <ul>
                                    <li>UI design</li>
                                    <li>Web & mobile development</li>
                                    <li>Product management</li>
                                    <li>Quality assurance</li>
                                    <li>DevOps and Cloud</li>
                                </ul>
                                <div className="mb-3">
                                    <label htmlFor="goal" className="form-label">
                                        What goal are you pursuing?
                                    </label>
                                    <select id="goal" className="form-select">
                                        <option>Choose</option>
                                        <option>Product development from scratch</option>
                                        <option>UI/UX design</option>
                                        <option>MVP development</option>
                                        <option>Quality assurance</option>
                                        <option>All of them</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="platform" className="form-label">
                                        Your project platform:
                                    </label>
                                    <select id="platform" className="form-select">
                                        <option>Choose</option>
                                        <option>Web</option>
                                        <option>Mobile</option>
                                        <option>All of them</option>
                                    </select>
                                </div>
                                <button className="btn btn-dark rounded-pill w-100" disabled={true}>Get a Quote</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow h-100">
                            <div className="card-header text-center bg-black text-white">
                                Dedicated developers
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Hire expert developers fast and easy</h5>
                                <p className="card-text">Our services include:</p>
                                <ul>
                                    <li>5-step talent selection process</li>
                                    <li>Staffing in under 1 month</li>
                                    <li>Developers onboarding</li>
                                    <li>Administration (office, HR, accounting)</li>
                                </ul>
                                <div className="mb-3">
                                    <label htmlFor="developers" className="form-label">
                                        How many developers do you need?
                                    </label>
                                    <select id="developers" className="form-select">
                                        <option>Choose</option>
                                        <option>1-3</option>
                                        <option>3-5</option>
                                        <option>5-10</option>
                                        <option>10+</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="duration" className="form-label">
                                        How long for?
                                    </label>
                                    <select id="duration" className="form-select">
                                        <option>Choose</option>
                                        <option>1-3 months</option>
                                        <option>3-6 months</option>
                                        <option>6-12 months</option>
                                        <option>An uncertain period</option>
                                    </select>
                                </div>
                                <button className="btn btn-dark rounded-pill w-100 mt-4" disabled={true}>Get a Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <IconCarousel/>
                <NewsletterBanner/>
            </div>

            <div className="container my-5">
                <div className="shadow border-0">
                    <div className="card-body p-4">
                        <h2 className="card-title mb-3 text-center">Cost of Outsourcing IT Services</h2>
                        <p className="card-text">
                        When innovation, passion, and expertise converge, extraordinary solutions come to life. At
                            <b> Codelogic,</b> our diverse team of professionals transforms ideas into impactful digital
                            experiences. We tackle challenges with creativity and precision, delivering tailored IT
                            solutions that align with your unique needs.
                        </p>
                        <p className="card-text">
                            Outsourcing IT services with us means more than cost savings—it’s about gaining exceptional
                            value, enhanced productivity, and cutting-edge tech capabilities. Our flexible and
                            transparent pricing ensures that businesses of all sizes can access high-quality IT
                            solutions without hidden costs or surprises. From initial consultation to post-launch
                            support, we offer comprehensive services tailored to your goals.
                        </p>
                        <p className="card-text">
                            From the initial consultation and strategic planning to development, testing, and
                            post-launch support,
                            we provide end-to-end services designed to meet your unique goals. Our team is dedicated to
                            exceeding expectations
                            at every stage of the process, ensuring your vision becomes a reality with precision and
                            efficiency.
                            Let us partner with you to turn challenges into opportunities and deliver solutions that
                            drive meaningful results.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}
