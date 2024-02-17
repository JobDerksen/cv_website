import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx';
import Strathclyde from "../../../public/university-of-strathclyde-banner.png";
import styles from "@/components/carousel/portfolioCarousel.module.scss";
import Image from "next/image";

const PortfolioCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                <div className={styles.embla__slide}>
                    <Image
                        src={Strathclyde}
                        alt={'balls'}
                        priority={true}
                        className={styles.image}
                    />
                </div>
                <div className={styles.embla__slide}>
                    <Image
                        src={Strathclyde}
                        alt={'balls'}
                        priority={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.buttons}>
                <button onClick={scrollPrev}>
                    Prev
                </button>
                <button onClick={scrollNext}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default PortfolioCarousel;
