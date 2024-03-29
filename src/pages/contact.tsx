import Head from "next/head";
import styles from '@/styles/Contact.module.scss'
import Image from 'next/image'
import linkedin from '../assets/LI-In-Bug.png';
import github from '../assets/github-mark.png';
import React from "react";
import EmailIcon from '../components/icons/email/EmailIcon'
import ContactForm from "@/components/contactForm/contactForm";

const Contact: React.FC = () => {
    const recipient = 'JobDerksen@outlook.com';
    const mailtoLink = `mailto:${recipient}`;
    const phoneNumber = '+447564165024'; // Replace this with the desired phone number

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    const handleEmailClick = () => {
        window.location.href = mailtoLink;
    };

    return (
        <div className={styles.background}>
            <div className='content' id='#contact'>
                <Head>
                    <title>Job Derksen</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.png"/>
                </Head>
                <main>
                    <div className={styles.container}>
                        <a target="_blank"
                           href="https://www.linkedin.com/in/jobderksen?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6QME1f%2FXTMCyxQ0DKnZSLg%3D%3D"
                           rel="noopener noreferrer"
                           className={styles.linkContainer}
                        >
                            <Image
                                src={linkedin}
                                alt='LinkedIn'
                                className={styles.image__linkedin}
                            />
                            <span className={styles.links}>in/jobderksen</span>
                        </a>
                        <a target="_blank"
                           href="https://github.com/JobDerksen"
                           rel="noopener noreferrer"
                           className={styles.linkContainer}
                        >
                            <Image
                                src={github}
                                alt='Github'
                                className={styles.image}
                            />
                            <span className={styles.links}>github.com/JobDerksen</span>
                        </a>
                        <a className={styles.linkContainer} onClick={handleEmailClick} style={{cursor: "pointer", zIndex:1}}>
                            <EmailIcon/>
                            <span className={styles.links}>JobDerksen@outlook.com</span>
                        </a>
                    </div>
                    <div className={styles.telephoneContainer}>
                        <a className={styles.telephone} onClick={handleCallClick} style={{cursor: "pointer"}}>Mobile:
                            +44 7564165024</a>
                    </div>
                    <div>
                        <ContactForm/>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Contact;
