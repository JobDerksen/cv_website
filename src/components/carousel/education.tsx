import InfoCard from "@/components/infoCards/infoCard";
import styles from "./carousel.module.scss";
import React, {useEffect, useState} from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import clsx from 'clsx';
import {useRouter} from "next/router";
import Strathclyde from "../../../public/university-of-strathclyde-banner.png";
import Marquee from "react-fast-marquee";
import ags from "../../../public/aberdeen grammar school.jpg";

const Education = () => {
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
                        img={Strathclyde}
                        description={'Strathclyde Image'}
                        heading={'The University of Strathclyde'}
                        bodyText={'2019 - 2024'}
                        background={'education'}
                    >
                        <div className={styles.listContainer}>
                            <div style={{textAlign: 'right'}}>
                                <ul>
                                    <li>First Year - 68%</li>
                                    <li>Second Year - 69%</li>
                                </ul>
                            </div>
                            <div style={{textAlign: 'left'}}>
                                <ul>
                                    <li>Third Year - 69%</li>
                                    <li>Fourth Year - 58%</li>
                                </ul>
                            </div>
                        </div>
                        <p className={styles.singularListElem}>Fifth year - current</p>
                        <p className='secondaryText'>Computing</p>
                        <Marquee pauseOnHover={true} loop={0}>
                            <div>
                                <p>
                                    <span>Designing Usable Systems</span>
                                    <span>Distributed Information Systems</span>
                                    <span>Mobile Software and Applications</span>
                                    <span>Software Architecture and Design</span>
                                    <span>Theory Of Computation</span>
                                    <span>Computer Security</span>
                                    <span>Foundations of Artificial Intelligence</span>
                                    <span>Building Software Systems</span>
                                    <span>Computing Systems and Concurrency</span>
                                    <span>Mobile App development</span>
                                    <span>Advanced Programming</span>
                                    <span>Computing Systems and Architecture</span>
                                    <span>Logic and Algorithms</span>
                                    <span>Machines, Languages and Computation</span>
                                    <span>Programming Foundations</span>
                                    <span>Foundations of Computer Systems</span>
                                </p>
                            </div>
                        </Marquee>
                        <p className='secondaryText'>Engineering</p>
                        <Marquee pauseOnHover={true} loop={0}>
                            <div>
                                <p>
                                    <span>Intelligent Sensing Through Machine Learning</span>
                                    <span>Neural Networks And Deep Learning</span>
                                    <span>Photonic Systems</span>
                                    <span>Signals and Communication Systems</span>
                                    <span>Engineering Innovations and Management</span>
                                    <span>Digital Electronic Systems</span>
                                    <span>Electronic and Electrical Principles</span>
                                    <span>Engineering Design and Manufacture</span>
                                    <span>Electronic and Electrical Techniques and Design</span>
                                    <span>Engineering Mathematics</span>
                                </p>
                            </div>
                        </Marquee>
                    </InfoCard>
                </div>
                <div className={clsx({
                    [styles['styles.embla__slide']]: isMobileScreen,
                    [styles['desktopWidth']]: !isMobileScreen,
                })}>

                    <InfoCard
                        img={ags}
                        description={'Aberdeen Grammar School Image'}
                        heading={'Aberdeen Grammar School'}
                        bodyText={'2013 - 2019'}
                        background={'education'}
                    >

                        <p className='secondaryText'>Advanced Highers</p>
                        <p className={styles.marqueeText}>
                            <span>Mathematics - B</span>
                            <span>Physics - B</span>
                        </p>
                        <p className='secondaryText'>Highers</p>
                        <p className={styles.marqueeText}>
                            <span>Mathematics - A</span>
                            <span>Physics - A</span>
                            <span>Computing Science - A</span>
                            <span>Engineering Science - A</span>
                            <span>Chemistry - A</span>
                            <span>Graphic Communication - B</span>
                        </p>
                    </InfoCard>
                </div>

            </div>
        </div>
    )
}

export default Education;