import Head from "next/head";
import React from "react";
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
// @ts-ignore
import beatifulMe from '../assets/jpgs/me/me.JPG'

const Home: React.FC = () => {
    return (
        <div className='pageContainerHome' id='/'>
            <Head>
                <title>Job Derksen</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className='content'>
                <Image
                    className={styles.image}
                    src={beatifulMe}
                    alt='Photo of me (Job Derksen)'
                    priority={true}
                />
                <h2>Hi, my name is Job Derksen...</h2>
            </div>
        </div>
    );
}
export default Home;
