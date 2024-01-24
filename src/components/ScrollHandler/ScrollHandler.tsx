import { FC, useEffect} from "react";
import useScroll from "./useScroll";

interface ScrollHandlerProps {
    className: string;
    elementRef: React.RefObject<HTMLDivElement>;
    setScrollMultiplier: number;
}

const ScrollHandler: FC<ScrollHandlerProps> = ({ elementRef, className, setScrollMultiplier }) => {
    const screenHeight = typeof window !== 'undefined' ? window.screen.height - 440 : 900;
    const scrollPosition = useScroll();

    useEffect(() => {
        if (scrollPosition.y > screenHeight * setScrollMultiplier) {
            elementRef.current?.classList.add(className);
        } else {
            elementRef.current?.classList.remove(className);
        }
    }, [scrollPosition]);

    return null;
};

export default ScrollHandler;
