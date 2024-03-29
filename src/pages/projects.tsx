import React, {useEffect, useRef, useState} from "react";
import Head from "next/head";
import styles from '@/styles/projects.module.scss'
import ScrollHandler from "@/components/ScrollHandler/ScrollHandler";
import ParticlesComp from "../../components/src/particles/Particles";
import clsx from "clsx";
import useWindowDimensions from "../hooks/useWindowDimensions"
import GreenkeeperCarousel from "../components/carousel/greenkeeperCarousel";
import PortfolioCard from '../components/cards/portfolioCard'
import CheckoutCarousel from "@/components/carousel/checkoutCarousel";
import TachometerCarousel from "@/components/carousel/tachometerCarousel";
import Image from "next/image";
import EmptyCalc from "@/assets/projects/billSplitter/EmptyCalc.jpg";
import FilledCalc from "@/assets/projects/billSplitter/FilledCalc.jpg";
import SelectCurrency from "@/assets/projects/billSplitter/SelectCurrency.jpg";
import BostonMetroCarousel from "@/components/carousel/bostonMetroCarousel";
import Model from '@/components/3Dmodel/3DModel'
import ResModel from '@/components/3Dmodel/reservoir'
import CalorieTrackerCarousel from "@/components/carousel/calorieTrackerCarousel";
import WebsiteCarousel from "@/components/carousel/websiteCarousel";

const Projects = () => {
    const portfolioRef = useRef<HTMLDivElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);

    const [contentHeightBanner, setContentHeightBanner] = useState<number>(0);
    const heroSizeRef = useRef<HTMLDivElement>(null);

    const [showParticles, setShowParticles] = useState(false)
    const [flip, setFlip] = useState(false)

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
            setFlip(true)
            if(contentHeightBanner > (92)){
                setShowParticles(true)
            } else{
                setShowParticles(false)
            }
        }else {
            setFlip(false)
            if(contentHeightBanner > (183)){
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
                <meta name="description" content="A brief overview of my past projects throughout my Educational Career"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.png"/>
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
            {/*https://www.agcc.co.uk/news-article/aberdeen-grammar-school-wins-top-prize-at-final-of-techfests-stem-in-the-pipeline-oil-and-gas-challenge*/}
            <main className={styles.main}>
                <h4 className='sectionHeadPortfolio' style={{color:'#e0e0e0e0'}}>University Projects <span
                    style={{fontStyle:'italic'}}>2019 - Present</span>
                </h4>
                <PortfolioCard
                    title={'Robotic Greenkeeper'}
                    skills={'Next.js, Typescript, SCSS, HTML, Python, Arduino(C++), Cloud Computing(AWS, Web hosting and APIs), Artificial Intelligence, Gira, Teamwork'}
                    type={'Group Meng Computing & Electronic Electrical Engineering Project '}
                    year={'2023 - Current'}
                    description={
                        'This group project is the culmination of my whole educational career and is thus far the highlight. ' +
                        'This project is a challenge and takes into the computing side and electronic engineering side ' +
                        'and is so far the most valuable experience I have had the pleasure to be a part of. This project ' +
                        'is creating a robot which is to scan a golf green to look for and fix pitch marks, indents caused ' +
                        'by the ball landing onto the surface. It also is to classify the health of the soil on the green ' +
                        'by testing the nutrient composition.'
                    }
                    url={"https://main.d1knm3fjtjv9v5.amplifyapp.com/"}
                    swap={true}
                    flip={flip}
                >
                    <GreenkeeperCarousel/>
                </PortfolioCard>
                <PortfolioCard
                    title={'Checkout Assistant'}
                    skills={'React Native, Javascript, SQL, PHP, APIs'}
                    type={'Fourth Year Project, Mobile App'}
                    year={'2022 - 2023'}
                    description={
                        'The project aim was to help shoppers simplify their grocery shopping scan their groceries ' +
                        'as they are shopping and then have the app generate a barcode which is to be scanned by the cashier. ' +
                        'The app has the ability to scan the barcodes of grocery items using the phones camera which retrieves the ' +
                        'item name and price off a custom database with the use of PHP and SQL. The app also stores ' +
                        'and displays statistics based off the spending and shop preferences.'
                }
                    swap={false}
                    flip={flip}
                >

                    <CheckoutCarousel/>
                </PortfolioCard>
                <PortfolioCard
                    title={'Tachometer'}
                    skills={'React Native, Javascript, Bluetooth, PCB design, Microcontroller, Soldering'}
                    type={'Third Year Group Project, Mobile App'}
                    year={'2021 - 2022'}
                    description={
                        'My group and I decided on a tachometer which is a device used to detect RPM. We designed and created a PCB which ' +
                        'used an infrared LED and a photo diode to cause a voltage change to make a square wave which can be converted ' +
                        'into an RPM on the microcontroller. We created a mobile app which connected to the microcontroller via a bluetooth module ' +
                        'the RPM value was displayed in app along with a graph against time. We also implemented a game where three players compete to spin a 3D printed ' +
                        'hand crank the fastest within 20 seconds.'
                }
                    swap={true}
                    flip={flip}
                >

                    <TachometerCarousel/>
                </PortfolioCard>
                <PortfolioCard
                    title={'Bill Splitter'}
                    skills={'Javascript, HTML, CSS, APIs, MVC'}
                    type={'Solo Project, Web/Mobile App'}
                    year={'2022'}
                    description={
                        'It is a simple web application meant to split a bill, it allows the user to include ' +
                        'a tip and to round up it is then split evenly. The user can also select the currency of their home ' +
                        'and the country they are visiting to see the conversions. ' +
                        '- note that the API we had to use no longer works ' +
                        'so when visiting the application it will not display correctly.'
                }
                    url={'https://devweb2021.cis.strath.ac.uk/~ypb19142/MAD_JobDerksen_2sdfsdfsfsdf/BillSplitter/index.html'}
                    swap={false}
                    flip={flip}
                >

                    <div className={styles.imageContainer}>
                        <Image
                            src={SelectCurrency}
                            alt={'home page of app'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={EmptyCalc}
                            alt={'home page of app scrolled further'}
                            priority={true}
                            className={styles.image}
                        />
                        <Image
                            src={FilledCalc}
                            alt={'health of green'}
                            priority={true}
                            className={styles.image}
                        />

                    </div>
                </PortfolioCard>
                <PortfolioCard
                    title={'Boston Metro System'}
                    skills={'Java, Sorting Algorithms, OOP, Agile, Swing'}
                    type={'Third Year Project'}
                    year={'2022'}
                    description={
                        'The Boston Metro System is a java application which has a user input their departing station ' +
                        'and their destination, the user will be shown the route and if they need to change to a different ' +
                        'line and the time of their journey.'}
                    swap={true}
                    flip={flip}
                >
                    <BostonMetroCarousel/>
                </PortfolioCard>
                <h4 className='sectionHeadPortfolio' style={{color: '#e0e0e0e0'}}>Personal Projects <span
                    style={{fontStyle: 'italic'}}>2021 - Present</span>
                </h4>
                <PortfolioCard
                    title={'Calorie Tracking Mobile'}
                    skills={'React Native'}
                    type={'Mobile App'}
                    year={'2022'}
                    description={
                        'This app was created to allow me to track my daily caloric and protein intake ' +
                        'I made this for myself as I wanted an easy to use app to keep on track of my goals to aid ' +
                        'my gym progress. I found other apps over complicated so instead of using them I made my own. '
                        }
                    swap={false}
                    flip={flip}
                >
                    <CalorieTrackerCarousel/>
                </PortfolioCard>
                <PortfolioCard
                    title={'This Website'}
                    skills={'Next.js'}
                    type={'Website'}
                    year={'Current'}
                    description={
                        'I Made this website to display my portfolio and to show off my skills ' +
                        'it as been a highly fulfilling and creative process. The website exists under two domains ' +
                        'Jobderksen.com and Jobderksen.tech which is an NFT/web3 domain, I got this domain since I thought it may come ' +
                        'of further use in the future.'
                }
                    swap={true}
                    flip={flip}
                >

                    <WebsiteCarousel/>
                </PortfolioCard>
                <h4 className='sectionHeadPortfolio' style={{color: '#e0e0e0e0'}}>School Projects <span
                    style={{fontStyle: 'italic'}}>2017 - 2019</span>
                </h4>
                <PortfolioCard
                    title={'F1 in Schools'}
                    skills={'CAD, Teamwork'}
                    type={'Extra Curricular School Project'}
                    year={'2018-2019'}
                    description={
                        'F1 in Schools is a global competition where schools enter and need to design a small ' +
                        'car which is raced in a straight line using a CO2 canister, teams need ' +
                        'to fund all the aspects of the competition by using sponsors. There are many aspects besides the car ' +
                        'such as a pit display, presentations, team uniforms and innovations. My team was placed First ' +
                        'in Scotland and were invited to the world final in Abu Dhabi but unfortunately were unable to attend due to the whole team ' +
                        'starting university and having to fund the money for the flights.'
                }
                    url={'https://overdrive18.wixsite.com/home'}
                    swap={false}
                    flip={flip}
                >
                    <div className={styles.model}>
                        <Model/>
                    </div>

                </PortfolioCard>
                <PortfolioCard
                    title={'Stem in the Pipeline'}
                    skills={'CAD, Cost Analysis'}
                    type={'Extra Curricular Project'}
                    year={'2019'}
                    description={
                        'This was a local competition between schools in Aberdeen where each team is given ' +
                        'a map where there is a sub sea oil reservoir, the total oil in the reservoir needs to be calculated ' +
                        'and a plan then needs to be developed which consists of how to retrieve the oil by choosing the type of oil rigs ' +
                        'and how to transfer the oil back to the coast considering the total cost and calculating when the ' +
                        'operation becomes profitable and what the profit projections are along with creating a report and a ' +
                        'a display. The model shown is a 3D model of the reservoir.'
                }
                    swap={true}
                    flip={flip}
                    url={'https://www.energyvoice.com/oilandgas/north-sea/188096/aberdeen-school-scoops-top-oil-and-gas-challenge/'}
                >

                    <div className={styles.model}>
                        <ResModel/>
                    </div>
                </PortfolioCard>
            </main>
            <ScrollHandler
                className={styles.pageTitle_scroll}
                elementRef={portfolioRef}
                startScrollOffset={1800}
            />

            <ScrollHandler
                className={styles.gradient_after}
                elementRef={gradientRef}
                startScrollOffset={1800}
            />
        </div>
    )
}
export default Projects;
