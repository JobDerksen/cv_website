import React, { FC, useEffect} from "react";
import useScroll from "../../hooks/useScroll";

interface ScrollHandlerProps {
    className: string;
    elementRef: React.RefObject<HTMLDivElement>;
    startScrollOffset: number;
}

const ScrollHandler: FC<ScrollHandlerProps> = ({ elementRef, className, startScrollOffset}) => {
    const scrollPosition = useScroll(); //hook which gets the scroll position

    useEffect(() => {
        //initial and end scroll multipliers are used to trigger the start and end scroll position
        if (scrollPosition.y > startScrollOffset)
        {
            elementRef.current?.classList.add(className);
        } else {
            elementRef.current?.classList.remove(className);
        }
    }, [scrollPosition, elementRef, className, startScrollOffset]);

    return null;
};

export default ScrollHandler;
