import React, {useEffect, useRef, useState} from "react";
import Head from 'next/head'
import styles from '@/styles/about.module.scss'
import ScrollHandler from '../components/ScrollHandler/ScrollHandler'
import Skills from '@/components/carousel/skills'
import Education from '@/components/carousel/education'


const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);

    const [contentHeightBanner, setContentHeightBanner] = useState<number>(0);
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
    <div className={styles.body} id='#about'>
        <Head>
            <title>Job Derksen</title>
            <meta name="description" content="Hi, I'm Job. A final year student studying my masters in computing and electronic systems, CES." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png"/>
        </Head>
        <header style={{height:contentHeightBanner, overflow:'hidden'}}>
            <div ref={gradientRef} className={styles.gradient}>
                <section className={styles.hero} ref={heroSizeRef}>
                    <h1 ref={aboutRef} className={styles.pageTitle}>ABOUT ME</h1>
                </section>
            </div>
        </header>
        <main className='content' style={{justifyContent:'left'}}>
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
                Born 19<sup>th</sup> of April 2001 in Leidschendam Netherlands (near The Hague). I moved to
                Canada in 2007 and then to Scotland in 2013 where I reside now.
            </h3>
            <h4 className='sectionHead'>Education</h4>
                <div className='desktopWidth'>
                    <Education/>
                </div>
            <h4 className='sectionHead'>Skills</h4>
                <div className='desktopWidth'>
                    <Skills/>
                </div>
        </main>

        <ScrollHandler
            className={styles.pageTitle_scroll}
            elementRef={aboutRef}
            startScrollOffset={500}
        />

        <ScrollHandler
            className={styles.gradient_after}
            elementRef={gradientRef}
            startScrollOffset={600}
        />
    </div>
    )
}
export default About;
