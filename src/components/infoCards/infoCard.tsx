import React, { FC, ReactNode, useState } from "react";
import styles from './infoCard.module.scss'
import Image, { StaticImageData } from 'next/image'
import clsx from "clsx";

interface cardProps {
    img: StaticImageData;
    heading: string;
    bodyText: string;
    description: string;
    children: ReactNode;
}

const InfoCard:FC<cardProps> = ({img,heading,bodyText,description,children}) => {
    const [isClicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!isClicked)
    }

    return(
        <div className={styles.outline}>
            <div className={styles.complex}>
                <div style={{zIndex: 2, position:'relative'}} onClick={handleClick}>
                    <Image
                        src={img}
                        alt={description}
                        priority={true}
                        className={clsx({
                            [styles['image']]: !isClicked,
                            [styles['image_after']] : isClicked
                        })}
                    />
                    <main
                        className={clsx({
                        [styles['main']]: !isClicked,
                        [styles['main_after']] : isClicked
                    })}
                    >
                        <h3>{heading}</h3>
                        <a>{bodyText}</a>
                        <div className={clsx({
                            [styles['furtherInfo']]: !isClicked,
                            [styles['furtherInfo_after']] : isClicked
                        })}>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
