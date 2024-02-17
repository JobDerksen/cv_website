import { useState, useEffect } from "react";

interface ScrollPosition {
    x: number;
    y: number;
    total: number;
}

const useScroll = (): ScrollPosition => {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
        x: 0,
        y: 0,
        total: 0,
    });

    const handleScroll = () => {
        setScrollPosition({
            x: window.scrollX,
            y: window.scrollY,
            total: window.document.documentElement.scrollHeight
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
};

export default useScroll;
