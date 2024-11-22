import React from "react";

const AnimatedButton = ({ text, onClick, className = "", style = {} }) => {
    return (
        <button
            onClick={onClick}
            className={`btn px-4 py-2 rounded-pill text-white border-0 ${className}`}
            style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s ease",
                ...style, // Allow overriding styles from props
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "scale(1.1)"; // Scale to 110%
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "scale(1)"; // Reset to original size
            }}
        >
            {text}
        </button>
    );
};

export default AnimatedButton;
