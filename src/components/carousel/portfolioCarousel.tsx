import React, {useCallback} from "react";
import useEmblaCarousel from 'embla-carousel-react'
import homePage from "../../../public/homePage.jpg";
import homePageScrolled from "../../../public/homePageScrolled.jpg";
import greenHealth from "../../../public/greenHealth.jpg";
import robotAssembly from "../../../public/robotAssemnly.jpg";
import robotUpright from "../../../public/robotUpright.jpg";
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
                    <div className={styles.imageContainer}>
                        <Image
                            src={robotUpright}
                            alt={'balls'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={robotAssembly}
                            alt={'balls'}
                            priority={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={homePage}
                            alt={'balls'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={homePageScrolled}
                            alt={'balls'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={greenHealth}
                            alt={'balls'}
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

export default PortfolioCarousel;
