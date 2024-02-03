import InfoCard from "@/components/infoCards/infoCard";
import hand from "../../../public/hand.png";
import styles from "./skills.module.scss";
import skillhands from "../../../public/skillhands.png";
import softhand from "../../../public/softhand.png";
import React, {useEffect, useState} from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import clsx from 'clsx';
import {useRouter} from "next/router";

const Skills = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    const router = useRouter();
    const screenWidth = typeof window !== 'undefined' ? window.screen.width : 800;
    const [isMobileScreen, setMobileScreen] = useState(false);

    useEffect(()=>{
        if(screenWidth <= 1024 && router.pathname !== '/about') setMobileScreen(true)
        else setMobileScreen(false)
    },[router.pathname, screenWidth])

    return (
        <div className={clsx({
            [styles['embla']]: isMobileScreen,
            [styles['']]: !isMobileScreen,
        })}
             ref={isMobileScreen ? emblaRef : null}
        >
            <div className={clsx({
                [styles['embla__container']]: isMobileScreen,
                [styles['rowContainer']]: !isMobileScreen
            })

            }>
                <div className={clsx({
                    [styles['styles.embla__slide']]: isMobileScreen,
                    [styles['']]: !isMobileScreen,
                })}>
                    <InfoCard
                        img={hand}
                        description={'Strathclyde Image'}
                        heading={'Programming Languages'}
                        bodyText={''}
                        background={'languages'}
                    >
                        <span/>
                        <div style={{marginTop: 10}}>
                            <p className={styles.skillText}>
                                <a>Java, </a>
                                <a>Python, </a>
                                <a>C, </a>
                                <a>Arduino(C++),</a>
                                <a>Kotlin, </a>
                                <a>JavaScript, </a>
                                <a>TypeScript, </a>
                                <a>CSS, </a>
                                <a>PHP, </a>
                                <a>XML, </a>
                                <a>XQuery, </a>
                                <a>RDF, </a>
                                <a>SPARQL, </a>
                                <a>OWL, </a>
                                <a>HTML, </a>
                                <a>SQL, </a>
                                <a>Assembly, </a>
                                <a>and VHDL</a>
                            </p>

                        </div>
                    </InfoCard>
                </div>
                <div className={clsx({
                    [styles['styles.embla__slide']]: isMobileScreen,
                    [styles['']]: !isMobileScreen,
                })}>
                    <InfoCard
                        img={skillhands}
                        description={'Strathclyde Image'}
                        heading={'Specialist Software'}
                        bodyText={''}
                        background={'software'}
                    >
                        <span/>
                        <p className={styles.skillText}>
                            <a>AWS(Amplify and S3 buckets), </a>
                            <a>Git, </a>
                            <a>Autodesk (Eagle, Inventor, Fusion 360, and Flow Design), </a>
                            <a>Figma, </a>
                            <a>Matlab,</a>
                            <a>Vivado, </a>
                            <a>OrCad, </a>
                            <a>and Excel</a>
                        </p>
                    </InfoCard>
                </div>
                <div className={clsx({
                    [styles['styles.embla__slide']]: isMobileScreen,
                    [styles['']]: !isMobileScreen,
                })}>
                    <InfoCard
                        img={softhand}
                        description={'Strathclyde Image'}
                        heading={'Soft Skills'}
                        bodyText={''}
                        background={'soft'}
                    >
                        <span/>
                        <p className={styles.skillText}>
                            <a>Teamwork, </a>
                            <a>Dedication, </a>
                            <a>Leadership, </a>
                            <a>Customer Service, </a>
                            <a>Graphic Design, </a>
                            <a>Creative, </a>
                            <a>and Public Speaking </a>
                        </p>
                    </InfoCard>
                </div>
            </div>
        </div>
    )
}

export default Skills;
