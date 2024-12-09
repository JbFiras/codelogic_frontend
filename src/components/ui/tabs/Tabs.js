'use client';
import { useState } from "react";
import { motion } from "framer-motion";

export const Tabs = ({
                         tabs: propTabs,
                         containerClassName,
                         activeTabClassName,
                         tabClassName,
                         contentClassName,
                     }) => {
    const [active, setActive] = useState(propTabs[0]);
    const [tabs, setTabs] = useState(propTabs);

    const moveSelectedTabToTop = (idx) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(false);

    return (
        <>
            <div
                className={`d-flex flex-row overflow-auto ${containerClassName}`}
            >
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => moveSelectedTabToTop(idx)}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        className={`btn btn-outline-primary me-2 ${tabClassName}`}
                    >
                        {active.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={`btn btn-primary position-absolute start-0 top-0 w-100 h-100 rounded ${activeTabClassName}`}
                                style={{ zIndex: -1 }}
                            />
                        )}
                        <span>{tab.title}</span>
                    </button>
                ))}
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={`mt-4 ${contentClassName}`}
            />
        </>
    );
};

export const FadeInDiv = ({ className, tabs, hovering }) => {
    const isActive = (tab) => {
        return tab.value === tabs[0].value;
    };

    return (
        <div className="position-relative w-100 h-100">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -10 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 20, 0] : 0,
                    }}
                    className={`position-absolute w-100 h-100 ${className}`}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    );
};
