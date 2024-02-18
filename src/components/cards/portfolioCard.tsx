import styles from "./portfolioCard.module.scss";
import React, {FC, ReactNode} from "react";
import clsx from "clsx";

interface cardProps {
    title: string,
    skills: string,
    type: string,
    year: string,
    description: string,
    url: string,
    children: ReactNode,
    swap: boolean,
    flip: boolean,
}

const PortfolioCard: FC<cardProps> = ({title,skills, type,year,description, url, children, swap,flip}) =>{

    if (swap) { return (
        <div className={styles.projectLeft}>
            <div className={styles.project}>
                <section>
                    <h1>{title}</h1>
                </section>
                <div
                    className={clsx({
                        [styles['balls']]: !flip,
                        [styles['none']]: flip
                    })}
                >
                    {children}
                </div>
                <div>
                    <div className={styles.outcomes}>
                        <p>
                            Skills Used: <span>{skills}</span>
                        </p>
                        <p style={{whiteSpace: 'pre-line'}}>
                            Type: <span>{type}</span>
                            {'\n \n'}
                            Year: <span>{year}</span>
                        </p>
                    </div>
                    <div className={styles.outcomes}>
                        <p>Description:
                            <a>
                                {description}
                            </a>
                        </p>
                    </div>
                    <div className={styles.outcomes}>
                        <p>
                            <a
                                className={styles.externalLink}
                                target="_blank"
                                href={url}
                                rel="noopener noreferrer"
                            >
                                <span>Visit</span>
                            </a>
                        </p>
                    </div>
                </div>
                <div
                    className={clsx({
                        [styles['balls']]: flip,
                        [styles['none']]: !flip
                    })}
                >
                    {children}
                </div>
            </div>
        </div>
    )
    } else {
        return (
            <div className={styles.projectRight}>
                <div className={styles.project}>
                    <section>
                        <h1
                            className={clsx({
                                [styles['']]: flip,
                            [styles['none']]: !flip})}
                    >
                        {title}
                    </h1>
                </section>
                <div>
                    <div className={styles.outcomes}>
                        <p>
                            Skills Used: <span>{skills}</span>
                        </p>
                        <p style={{whiteSpace: 'pre-line'}}>
                            Type: <span>{type}</span>
                            {'\n \n'}
                            Year: <span>{year}</span>
                        </p>
                    </div>
                    <div className={styles.outcomes}>
                        <p>
                            Description:
                            <a>
                                {description}
                            </a>
                        </p>
                    </div>

                    <div className={styles.outcomes}>
                        <p>
                            <a
                                className={styles.externalLink}
                                target="_blank"
                                href={url}
                                rel="noopener noreferrer"
                            >
                                <span>Visit</span>
                            </a>
                        </p>
                    </div>

                </div>
                <div className={styles.balls}>
                    {children}
                </div>
                <section>
                    <h1
                        className={clsx({
                        [styles['']]: !flip,
                        [styles['none']]: flip,})}
                    >
                        {title}
                    </h1>
                </section>
            </div>
        </div>
    )
    }
}

export default PortfolioCard;
