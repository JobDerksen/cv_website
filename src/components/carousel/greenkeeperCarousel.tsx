import React, {useCallback} from "react";
import useEmblaCarousel from 'embla-carousel-react'
import homePage from "../../assets/projects/greenkeeper/homePage.jpg";
import homePageScrolled from "../../assets/projects/greenkeeper/homePageScrolled.jpg";
import greenHealth from "../../assets/projects/greenkeeper/greenHealth.jpg";
import robotAssembly from "../../assets/projects/greenkeeper/RobotAssemnly.jpg";
import robotUpright from "../../assets/projects/greenkeeper/RobotUpright.jpg";
import styles from "./portfolioCarousel.module.scss";
import Image from "next/image";

const GreenkeeperCarousel = () => {
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
                            src={robotUpright}
                            alt={'Robotic green keeper robot'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={robotAssembly}
                            alt={'Robotic green keeper robot upside down under construction'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={homePage}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={homePageScrolled}
                            alt={'home page of app scrolled further'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={greenHealth}
                            alt={'health of green'}
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

export default GreenkeeperCarousel;
