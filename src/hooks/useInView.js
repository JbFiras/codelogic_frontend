import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const currentElement = ref.current; // Copy ref.current to a local variable
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                // Once the animation has played, we can disconnect the observer
                if (currentElement) {
                    observer.unobserve(currentElement);
                }
            }
        }, {
            threshold: 0.1,
            ...options
        });

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    return { ref, isInView };
}
