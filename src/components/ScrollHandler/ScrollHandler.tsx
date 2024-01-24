import { FC, useEffect} from "react";
import useScroll from "./useScroll";

interface ScrollHandlerProps {
    className: string;
    elementRef: React.RefObject<HTMLDivElement>;
    initialScrollMultiplier: number;
    endScrollMultiplier: number;
}

const ScrollHandler: FC<ScrollHandlerProps> = ({ elementRef, className, initialScrollMultiplier,endScrollMultiplier }) => {
    const screenHeight = typeof window !== 'undefined' ? window.screen.height: 1080;
    const scrollPosition = useScroll();

    useEffect(() => {
        if (scrollPosition.y > screenHeight * initialScrollMultiplier && scrollPosition.y < screenHeight * endScrollMultiplier) {
            elementRef.current?.classList.add(className);
        } else {
            elementRef.current?.classList.remove(className);
        }
    }, [scrollPosition]);

    return null;
};

export default ScrollHandler;
