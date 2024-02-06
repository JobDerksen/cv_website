import React from "react";
import Head from "next/head";
import styles from '@/styles/projects.module.scss'
const Projects = () => {
    return(
        <div className='pageContainer' id='projects'>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div className='content'>
                    <div className={styles.container}>
                        My projects
                        {/*https://www.energyvoice.com/oilandgas/north-sea/188096/aberdeen-school-scoops-top-oil-and-gas-challenge/*/}
                        {/*https://www.agcc.co.uk/news-article/aberdeen-grammar-school-wins-top-prize-at-final-of-techfests-stem-in-the-pipeline-oil-and-gas-challenge*/}
                    </div>
                </div>
        </div>
    )
}
export default Projects;
