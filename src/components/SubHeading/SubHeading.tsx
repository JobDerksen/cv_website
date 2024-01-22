import React, {useEffect, useState } from "react";
import styles from './SubHeading.module.scss'

const SubHeading: React.FC = () => {

    const textList1 = ['Sofware', 'Electronic', 'Computer', 'Data'];
    const textList2 = ['Engineer', 'Scientest'];
    const textList3 = ['Developer', 'Designer', 'Bartender', 'Powerlifter']

    //function to cycle through the arrays, waiting is the multiplier for how long the text will last on screen

    const CycleList = (list: any[string], waiting: number) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [currentText, setCurrentText] = useState(list[currentIndex]);

        useEffect(() => {
            const intervalId = setInterval(() => {
                // Cycle through the text list
                setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
            }, 3000 * waiting); // Change text every 2000 milliseconds (2 seconds)

            return () => clearInterval(intervalId); // Cleanup the interval on component unmount
        });

        useEffect(() => {
            // Update the current text when the index changes
            setCurrentText(list[currentIndex]);
        }, [currentIndex]);

        return currentText;
    }

    return (
        <div className={styles.rowContainer}>
            <div className={styles.rowContainer_firstPart}>
                <h2 className={styles.subTitle}>{CycleList(textList1, 1)}</h2>
                <h3 className={styles.subTitle}> {CycleList(textList2, 2)}</h3>
            </div>
            <h2 className={styles.subTitle}> / </h2>
            <h2 className={styles.subTitle}></h2>
            <h2 className={styles.subTitle}> {CycleList(textList3, 2)}</h2>
        </div>
    );
}
export default SubHeading;
