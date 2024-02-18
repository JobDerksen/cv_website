import React, {useCallback} from "react";
import useEmblaCarousel from 'embla-carousel-react'
import allComponents from "../../assets/projects/Tachometer/allComponents.jpg";
import ConnectingViaBluetooth from "../../assets/projects/Tachometer/ConnectingViaBluetooth.jpg";
import GameInProgress from "../../assets/projects/Tachometer/GameInProgress.jpg"
import GameResults from "../../assets/projects/Tachometer/GameResults.jpg";
import HomeAppScreen from "../../assets/projects/Tachometer/HomeAppScreen.jpg";
import MeasuringInProgress from "../../assets/projects/Tachometer/MeasuringInProgress.jpg";
import SelectionScreen from "../../assets/projects/Tachometer/SelectionScreen.jpg"
import testingTachometer from "../../assets/projects/Tachometer/testingTachometer.jpg"
import styles from "./portfolioCarousel.module.scss";
import Image from "next/image";

const TachometerCarousel = () => {
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
                            src={allComponents}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={testingTachometer}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={HomeAppScreen}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={ConnectingViaBluetooth}
                            alt={'home page of app scrolled further'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={SelectionScreen}
                            alt={'health of green'}
                            priority={true}
                            className={styles.image}
                        />

                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={MeasuringInProgress}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={GameInProgress}
                            alt={'home page of app scrolled further'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={GameResults}
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

export default TachometerCarousel;
