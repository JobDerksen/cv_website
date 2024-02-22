import React, {useCallback} from "react";
import useEmblaCarousel from 'embla-carousel-react'
import home from "../../assets/projects/colorieTracker/home.jpg";
import newScran from "../../assets/projects/colorieTracker/newScranButton.jpg";
import addMeal from "../../assets/projects/colorieTracker/addMeal.jpg";
import addFood from "../../assets/projects/colorieTracker/addFood.jpg";
import styles from "./portfolioCarousel.module.scss";
import Image from "next/image";

const CalorieTrackerCarousel = () => {
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
                        <Image
                            src={addFood}
                            alt={'home page of app scrolled further'}
                            priority={true}
                            className={styles.image}
                        />


                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={newScran}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={addMeal}
                            alt={'home page of app scrolled further'}
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

export default CalorieTrackerCarousel;
