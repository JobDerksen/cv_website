import React, {useCallback} from "react";
import useEmblaCarousel from 'embla-carousel-react'
// @ts-ignore
import home from "../../assets/projects/website/home.JPG";
// @ts-ignore
import about from "../../assets/projects/website/about.JPG";
// @ts-ignore
import portfolio from "../../assets/projects/website/portfolio.JPG"
import styles from "./portfolioCarousel.module.scss";
import Image from "next/image";

const WebsiteCarousel = () => {
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
                    <div className={styles.imageContainer}>
                        <Image
                            src={home}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={about}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={portfolio}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.buttons} style={{width: 80}}>
                <a className={styles.previous} onClick={scrollPrev}>&#8249;</a>
                <a className={styles.next} onClick={scrollNext}>&#8250;</a>
            </div>
        </div>
    )
}

export default WebsiteCarousel;
