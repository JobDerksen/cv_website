import React from "react";
import Head from 'next/head'
import styles from '@/styles/about.module.scss'
const About = () => {
return(
    <div className='pageContainer' id='/about'>
        <Head>
            <title>About Me</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className='content'>
                <div className={styles.gradient}>
                    about me
                </div>
            </div>
    </div>
)
}
 export default About;
