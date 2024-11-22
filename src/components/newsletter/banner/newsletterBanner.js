import React, {useState} from 'react';

const NewsletterBanner = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="pt-5">
            <div
                className="p-5 mt-5 position-relative text-center text-md-start"
                style={{ backgroundColor: '#4B65FD', minHeight: '200px' }}
            >
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between h-100">
                    {/* Left Section */}
                    <div className="text-white mb-3 mb-md-0">
                        <h1>
                            <span>Do you have any question?</span>
                            <br />
                            Feel free to contact us
                        </h1>
                    </div>

                    {/* Right Section */}
                    <div className="position-relative d-flex flex-column align-items-center mt-3">
                        {/* SVG Lines */}
                        <svg
                            width="73"
                            height="26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="position-relative mt-2 mb-2"
                        >
                            <g opacity="0.6" fill="#fff">
                                <rect
                                    x="2.472"
                                    y="7.892"
                                    width="22.088"
                                    height="3.681"
                                    rx="1.841"
                                    transform="rotate(42.177 2.472 7.892)"
                                />
                                <rect
                                    x="53.749"
                                    y="22.724"
                                    width="22.088"
                                    height="3.681"
                                    rx="1.841"
                                    transform="rotate(-42.18 53.75 22.724)"
                                />
                                <rect
                                    x="39"
                                    width="23"
                                    height="3"
                                    rx="1.5"
                                    transform="rotate(90 39 0)"
                                />
                            </g>
                        </svg>
                        {/* Button */}
                        <div>
                            <button
                                className="btn px-4 py-2 rounded-pill text-white border-0"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(8px)',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                    e.currentTarget.style.transform = 'scale(1.1)'; // Scale to 110%
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.transform = 'scale(1)'; // Reset to original size
                                }}
                            >
                                Contact us now
                            </button>
                        </div>
                        {/* Text Underneath */}
                        <div className="mt-2">
                            <small className="text-white">we don't bite. Usually</small>
                        </div>
                    </div>
                </div>

                {/* Optional Decorative Element */}
                <div
                    className="position-absolute d-none d-md-block"
                    style={{
                        left: '60%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                    }}
                >
                    <img
                        src="/assets/mockups/curve_line.svg"
                        alt="Contact Line"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewsletterBanner;
