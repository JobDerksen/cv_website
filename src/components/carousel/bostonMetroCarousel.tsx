import React, {useCallback} from "react";
import useEmblaCarousel from 'embla-carousel-react'
import CalculatedRoute from "../../assets/projects/bostonMetro/CalculatedRoute.jpg";
import Main from "../../assets/projects/bostonMetro/Main.jpg";
import Personal from "../../assets/projects/bostonMetro/Personal.jpg"
import styles from "./portfolioCarousel.module.scss";
import Image from "next/image";

const BostonMetroCarousel = () => {
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
                            src={Main}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={CalculatedRoute}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={Personal}
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

export default BostonMetroCarousel;
