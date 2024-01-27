import React, { FC } from "react";
import styles from './infoCard.module.scss'
import Image from 'next/image'

interface cardProps {
    // @ts-ignore
    img: image;
    heading: string;
    bodyText: string;
    description: string;
}

const InfoCard:FC<cardProps> = ({img,heading,bodyText,description}) => {

    return(
        <div className={styles.outline}>
            <div className={styles.complex}>
                <div style={{zIndex: 2, position:'relative'}}>
                    <Image
                        src={img}
                        alt={description}
                        className={styles.image}
                    />
                    <h3>{heading}</h3>
                    <a>{bodyText}</a>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
