import React, {useEffect, useRef, useState} from "react";
import Head from "next/head";
import styles from '@/styles/projects.module.scss'
import ScrollHandler from "@/components/ScrollHandler/ScrollHandler";
import ParticlesComp from "@/particles/Particles";
import clsx from "clsx";
import useWindowDimensions from "../hooks/useWindowDimensions"
import Image from "next/image";
import Strathclyde from "../../public/university-of-strathclyde-banner.png";

const Projects = () => {
    const portfolioRef = useRef<HTMLDivElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);

    const [contentHeightBanner, setContentHeightBanner] = useState<number>(0);
    const heroSizeRef = useRef<HTMLDivElement>(null);

    const [showParticles, setShowParticles] = useState(false)

    const screenWidth = useWindowDimensions().width;

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

    useEffect(() => {
        if(screenWidth <= 1024){
            if(contentHeightBanner > (92)){
                setShowParticles(true)
            } else{
                setShowParticles(false)
            }
        }else {
            if(contentHeightBanner > (184)){
                setShowParticles(true)
            } else{
                setShowParticles(false)
            }
        }
    }, [contentHeightBanner, screenWidth]);

    return(
        <div className={styles.container} id='#portfolio'>
            <Head>
                <title>Job Derksen</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header style={{height: contentHeightBanner, overflow: 'hidden'}}>
                <div ref={gradientRef} className={styles.gradient}>
                    <section className={styles.hero} ref={heroSizeRef}>
                        <h1 ref={portfolioRef} className={styles.pageTitle}>PORTFOLIO</h1>
                    </section>
                    <section className={clsx({
                        [styles['particleWidth']]: !showParticles,
                        [styles['particleWidth__after']]: showParticles,
                    })}>
                        <ParticlesComp init={showParticles}/>
                    </section>
                </div>
            </header>
            {/*https://www.energyvoice.com/oilandgas/north-sea/188096/aberdeen-school-scoops-top-oil-and-gas-challenge/*/}
            {/*https://www.agcc.co.uk/news-article/aberdeen-grammar-school-wins-top-prize-at-final-of-techfests-stem-in-the-pipeline-oil-and-gas-challenge*/}
            <main className={styles.main}>
                <h4 className='sectionHead' style={{color:'#e0e0e0e0'}}>University Projects <span
                    style={{fontStyle:'italic'}}>2019 - Present</span>
                </h4>
                <div className={styles.projectLeft}>
                    <div className={styles.project}>
                        <section>
                            <h1>Robotic Greenkeeper</h1>
                        </section>
                        <div>
                            <Image
                                src={Strathclyde}
                                alt={'balls'}
                                priority={true}
                                className={styles.image}
                            />
                        </div>
                        <div>
                            <div className={styles.outcomes}>
                                <p>Languages & Skills: </p>
                                <p>Type: </p>
                                <p>Year: </p>
                            </div>
                            <p>Learned:</p>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                animi,
                                id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                                distinctio.
                                Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                                id
                                quod
                                maxime
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.projectRight}>
                    <div className={styles.project}>
                        <div>
                            <p>Languages & Skills: </p>
                            <p>Type: </p>
                            <p>Learned:</p>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                                id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                                quod
                                maxime</p>

                        </div>
                        <div>
                            <Image
                                src={Strathclyde}
                                alt={'balls'}
                                priority={true}
                                className={styles.image}
                            />
                        </div>
                        <section>
                            <h1>Checkout Assistant</h1>
                        </section>
                    </div>
                </div>

                <div className={styles.projectLeft}>
                    <div className={styles.project}>
                        <section>
                            <h1>Bill splitter</h1>
                        </section>
                        <div>
                            <Image
                                src={Strathclyde}
                                alt={'balls'}
                                priority={true}
                                className={styles.image}
                            />
                        </div>
                        <div>
                            <p>Languages & Skills: </p>
                            <p>Type: </p>
                            <p>Learned:</p>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                                id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam
                                libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                                quod
                                maxime</p>

                        </div>
                    </div>
                </div>
                <h4 className='sectionHead' style={{color: '#e0e0e0e0'}}>Personal Projects <span
                    style={{fontStyle: 'italic'}}>2021 - Present</span>
                </h4>
                <h4 className='sectionHead' style={{color: '#e0e0e0e0'}}>School Projects <span
                    style={{fontStyle: 'italic'}}>2017 - 2019</span>
                </h4>
            </main>
            <ScrollHandler
                className={styles.pageTitle_scroll}
                elementRef={portfolioRef}
                startScrollOffset={-100}
                scrollMultiplier={2.3}
                endScrollOffset={184}
            />

            <ScrollHandler
                className={styles.gradient_after}
                elementRef={gradientRef}
                startScrollOffset={-100}
                scrollMultiplier={2.275}
                endScrollOffset={200000}
            />
        </div>
    )
}
export default Projects;
