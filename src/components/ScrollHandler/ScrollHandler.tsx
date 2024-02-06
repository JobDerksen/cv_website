import React, { FC, useEffect} from "react";
import useScroll from "../../hooks/useScroll";
import useWindowDimensions from "../../hooks/useWindowDimensions"

interface ScrollHandlerProps {
    className: string;
    elementRef: React.RefObject<HTMLDivElement>;
    initialScrollMultiplier: number;
    endScrollMultiplier: number;
}

const ScrollHandler: FC<ScrollHandlerProps> = ({ elementRef, className, initialScrollMultiplier,endScrollMultiplier }) => {
    const scrollPosition = useScroll(); //hook which gets the scroll position
    const screenHeight = useWindowDimensions().height; //this gets height of the screen and responds searchbar

    useEffect(() => {
        //initial and end scroll multipliers are used to trigger the start and end scroll position
        if (scrollPosition.y > screenHeight * initialScrollMultiplier && scrollPosition.y < screenHeight * endScrollMultiplier) {
            elementRef.current?.classList.add(className);
        } else {
            elementRef.current?.classList.remove(className);
        }
    }, [scrollPosition, screenHeight, initialScrollMultiplier, endScrollMultiplier, elementRef, className]);

    return null;
};

export default ScrollHandler;
