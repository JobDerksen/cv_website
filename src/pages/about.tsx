import React, {useEffect, useRef, useState} from "react";
import Marquee from "react-fast-marquee";
import Head from 'next/head'
import styles from '@/styles/about.module.scss'
import ScrollHandler from '../components/ScrollHandler/ScrollHandler'
import InfoCard from '../components/infoCards/infoCard'
import Strathclyde from '../../public/university-of-strathclyde-banner.png'
import ags from '../../public/aberdeen grammar school.jpg'

const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);

    const [contentHeightBanner, setContentHeightBanner] = useState<number | undefined>(0);
    const heroSizeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            setContentHeightBanner(entries[0].contentRect.height);
        });
        if (heroSizeRef.current) {
            observer.observe(heroSizeRef.current);
        }
        return () => {
            if (heroSizeRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(heroSizeRef.current);
            }
        };
    }, []);

    return(
    <div className={styles.body} id='/about'>
        <Head>
            <title>Job Derksen</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div style={{height:contentHeightBanner, overflow:'hidden'}}>
            <div ref={gradientRef} className={styles.gradient}>
                <section className={styles.hero} ref={heroSizeRef}>
                    <h1 ref={aboutRef} className={styles.pageTitle}>ABOUT ME</h1>
                </section>
            </div>
        </div>
        <main className={styles.container}>
            <h4 className='sectionHead' style={{marginTop: 50}}>Introduction</h4>
            <h3 className='mainText'>
                Hi, I&apos;m Job. A final year student studying my masters in computing and electronic systems, CES.
            </h3>
            <h3 className='mainText'>
                Why did I choose CES? I believed it to be the perfect course to understand technology with all of
                it&apos;s
                uses on all levels, and by the end of my degree I will be accredited from both the
                Institution of Engineering and Technology (IET) and the British Computing Society (BCS).
            </h3>
            <h3 className='mainText'>
                Born 19<sup>th</sup> of April 2001 in Leidschendam Netherlands (near The Hague). I Then moved to
                Canada in 2007 and then to Scotland in 2013 where I reside now.
            </h3>
            <h4 className='sectionHead'>Education</h4>
            <div className={styles.rowContainer}>
                <InfoCard
                    img={Strathclyde}
                    description={'Strathclyde Image'}
                    heading={'The University of Strathclyde'}
                    bodyText={'2019 - 2024'}
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
                            <p className={styles.marqueeText}>
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
                            <p className={styles.marqueeText}>
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

                <InfoCard
                    img={ags}
                    description={'Aberdeen Grammar School Image'}
                    heading={'Aberdeen Grammar School'}
                    bodyText={'2013 - 2019'}
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
                        <span>Engineering Science - A</span>
                        <span>Chemistry - A</span>
                        <span>Graphic Communication - B</span>
                    </p>

                </InfoCard>
            </div>
            <h4></h4>
            <h4 className='sectionHead'>Skills</h4>
            {/*Have Three columns languages, software and soft skills*/}
            {/*Lets also figure out a way we can be creative here*/}
        </main>

        <ScrollHandler
            className={styles.pageTitle_scroll}
            elementRef={aboutRef}
            initialScrollMultiplier={0.5}
            endScrollMultiplier={1.001}
        />

        <ScrollHandler
            className={styles.gradient_after}
            elementRef={gradientRef}
            initialScrollMultiplier={0.9}
            endScrollMultiplier={20}
        />
    </div>
    )
}
export default About;
