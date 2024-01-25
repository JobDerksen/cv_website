import React, { FC } from "react";
import styles from './infoCard.module.scss'

interface cardProps {
    image: string;
    heading: string;
    bodyText: string;
}

const InfoCard:FC<cardProps> = ({image,heading,bodyText}) => {

    return(
        <div className={styles.outline}>
            <>{image}</>
            <h1>{heading}</h1>
            <a>{bodyText}</a>
        </div>
    );
}

export default InfoCard;
