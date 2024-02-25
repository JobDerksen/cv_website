import React, { FC, useEffect} from "react";
import useScroll from "../../hooks/useScroll";
import useWindowDimensions from "../../hooks/useWindowDimensions"

interface ScrollHandlerProps {
    className: string;
    elementRef: React.RefObject<HTMLDivElement>;
    scrollMultiplier: number;
    endScrollOffset: number;
    startScrollOffset?: number;
}

const ScrollHandler: FC<ScrollHandlerProps> = ({ elementRef, className, scrollMultiplier,endScrollOffset, startScrollOffset = 0}) => {
    const scrollPosition = useScroll(); //hook which gets the scroll position
    const screenHeight = useWindowDimensions().height; //this gets height of the screen and responds searchbar

    useEffect(() => {
        //initial and end scroll multipliers are used to trigger the start and end scroll position
        if (scrollPosition.y > ((screenHeight *  scrollMultiplier) + startScrollOffset) && scrollPosition.y < ((screenHeight *  scrollMultiplier) + endScrollOffset)) {
            elementRef.current?.classList.add(className);
        } else {
            elementRef.current?.classList.remove(className);
        }
    }, [scrollPosition, screenHeight, scrollMultiplier, elementRef, className, startScrollOffset, endScrollOffset]);

    return null;
};

export default ScrollHandler;
