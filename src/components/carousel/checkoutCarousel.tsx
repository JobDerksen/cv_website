import React, {useCallback} from "react";
import useEmblaCarousel from 'embla-carousel-react'
import basketScreen from "../../assets/projects/checkout/basketScreen.jpg";
import editOrDeleteData from "../../assets/projects/checkout/editOrDeleteData.jpg";
import EnterNewData from "../../assets/projects/checkout/EnterNewData.jpg"
import FinishShop from "../../assets/projects/checkout/FinishShop.jpg";
import GroceryList from "../../assets/projects/checkout/GroceryList.jpg";
import groceryListSwipe from "../../assets/projects/checkout/groceryListSwipe.jpg";
import HistoryScreen from "../../assets/projects/checkout/HistoryScreen.jpg"
import HomeScreen from "../../assets/projects/checkout/HomeScreen.jpg"
import networkError from "../../assets/projects/checkout/networkError.jpg"
import pastShop from "../../assets/projects/checkout/PastShop.jpg"
import shopSelect from "../../assets/projects/checkout/shopSelect.jpg"
import styles from "./portfolioCarousel.module.scss";
import Image from "next/image";

const CheckoutCarousel = () => {
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
                            src={HomeScreen}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={basketScreen}
                            alt={'home page of app scrolled further'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={shopSelect}
                            alt={'health of green'}
                            priority={true}
                            className={styles.image}
                        />

                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={editOrDeleteData}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={EnterNewData}
                            alt={'home page of app scrolled further'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={networkError}
                            alt={'health of green'}
                            priority={true}
                            className={styles.image}
                        />

                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={GroceryList}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={groceryListSwipe}
                            alt={'home page of app scrolled further'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={FinishShop}
                            alt={'health of green'}
                            priority={true}
                            className={styles.image}
                        />

                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={HistoryScreen}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={pastShop}
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

export default CheckoutCarousel;
