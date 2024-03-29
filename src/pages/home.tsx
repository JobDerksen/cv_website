import Head from "next/head";
import React from "react";
import styles from '@/styles/Home.module.scss'
import SubHeading from '../components/SubHeading/SubHeading'

const Home: React.FC = () => {
    return (
        <div className='pageContainerHome' id='#home'>
            <Head>
                <title>Job Derksen</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Job Derksen</h1>
                <SubHeading/>
                    {/* CREDIT - https://www.pexels.com/video/foggy-day-by-the-mountain-9130080/*/}
                <video
                    src={require('../../public/video2.mp4')}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="yes"
                    className={styles.video}
                />
            </div>
        </div>
    );
}
export default Home;
