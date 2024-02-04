import InfoCard from "@/components/infoCards/infoCard";
import hand from "../../../public/hand.png";
import styles from "./carousel.module.scss";
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
                    [styles['desktopWidth']]: !isMobileScreen,
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
                            <p className='skillText'>
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
                            <p className='skillText'>
                                <a>
                                    I strive to become the best programmer I can be and I intend to keep learning new languages
                                    and build up my skills in the languages I know.
                                </a>
                            </p>
                        </div>
                    </InfoCard>
                </div>
                <div className={clsx({
                    [styles['styles.embla__slide']]: isMobileScreen,
                    [styles['desktopWidth']]: !isMobileScreen,
                })}>
                    <InfoCard
                        img={skillhands}
                        description={'Strathclyde Image'}
                        heading={'Specialist Software and Libraries'}
                        bodyText={''}
                        background={'software'}
                    >
                        <span/>
                        <p className='skillText'>
                            <a>AWS(Amplify and S3 buckets), </a>
                            <a>Git, </a>
                            <a>Autodesk (Eagle, Inventor, Fusion 360, and Flow Design), </a>
                            <a>Figma, </a>
                            <a>Matlab,</a>
                            <a>Vivado, </a>
                            <a>OrCad, </a>
                            <a>Excel, </a>
                            <a>and Photoshop</a>
                        </p>
                        <p className='skillText'>
                            <a>Tensorflow, </a>
                            <a>Scikit-Learn, </a>
                            <a>and the Framework; React.js(Next.js and React Native)</a>
                        </p>
                    </InfoCard>
                </div>
                <div className={clsx({
                    [styles['styles.embla__slide']]: isMobileScreen,
                    [styles['desktopWidth']]: !isMobileScreen,
                })}>
                    <InfoCard
                        img={softhand}
                        description={'Strathclyde Image'}
                        heading={'Soft Skills'}
                        bodyText={''}
                        background={'soft'}
                    >
                        <span/>
                        <p className='skillText'>
                            <a>Teamwork, </a>
                            <a>Self-Discipline, </a>
                            <a>Leadership, </a>
                            <a>Customer Service, </a>
                            <a>Graphic Design, </a>
                            <a>Creative, </a>
                            <a>and Public Speaking </a>
                        </p>
                        <p className='skillText'>
                            <a>
                                I have picked up many skills throughout my life, from working behind a bar to getting
                                myself in the gym and project work throughout my educational career.
                            </a>
                        </p>
                    </InfoCard>
                </div>
            </div>
        </div>
    )
}

export default Skills;
