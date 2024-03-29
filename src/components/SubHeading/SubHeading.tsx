import React, {useEffect, useState } from "react";
import styles from './SubHeading.module.scss'

const SubHeading: React.FC = () => {

    const textList1 = ['Software Engineer', 'Electronic Engineer','Computer Scientist', 'Data Scientist'];
    const textList2 = ['Designer', 'Developer', 'Bartender', 'Powerlifter','Programmer']

    //function to cycle through the arrays, waiting is the multiplier for how long the text will last on screen

    const CycleList = (list: any[string], waiting: number) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [currentText, setCurrentText] = useState(list[currentIndex]);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
            }, waiting)

            return () => clearInterval(intervalId);
        },[list.length, waiting]);

        useEffect(() => {
            // Update the current text when the index changes
            setCurrentText(list[currentIndex]);
        }, [currentIndex, list]);

        return currentText;
    }

    return (
        <div className={styles.rowContainer}>
            <div className={styles.rowContainer_firstPart}>
                <h3 className={styles.subTitle}>{CycleList(textList1, 3000)}</h3>
            </div>
            <div className={styles.rowContainer_secondPart}>
                <h3 className={styles.subTitle}>/</h3>
                <h3 className={styles.subTitle}></h3>
                <h3 className={styles.subTitle}> {CycleList(textList2, 12000)}</h3>
            </div>
        </div>
    );
}
export default SubHeading;
