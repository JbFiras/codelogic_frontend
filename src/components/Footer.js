'use client';
import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {facebookUrl, instagramUrl, linkedinUrl} from "@/utils/constants";

const Footer = () => {
    return (
        <footer className="text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5 className="fw-bold">
                            <Link href="/" className="text-white fs-5 no-underline">
                                <b>
                                    <span>CODE</span>
                                    <span style={{ color: "#38F1B9" }}>LOGIC</span>
                                </b>
                            </Link>
                        </h5>
                        <p>A consulting firm specialized in software solutions.</p>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0"></div>
                    <div className="col-md-4 mb-3 mb-md-0"></div>
                </div>
                <div className="row">
                    <div className="col text-end">
                        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                            <FaLinkedinIn size={20} />
                        </Link>
                        <Link href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                            <FaInstagram size={20} />
                        </Link>
                        <Link href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                            <FaFacebookF size={20} />
                        </Link>
                        {/*<Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">*/}
                        {/*    <FaXTwitter size={20} />*/}
                        {/*</Link>*/}
                    </div>
                </div>
                <hr className="text-light" />
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">
                        © {new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
