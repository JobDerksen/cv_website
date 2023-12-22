import React, {ReactNode, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image'
import Link from 'next/link';
import styles from './Navigation.module.scss'
import closeIcon from '../../assets/X.png';
import hamburgerIcon from '../../assets/hamburger.png';
import {useRouter} from "next/router";

interface CustomLinkProps {
    to: string;
    children: ReactNode;
    [key: string]: any; // This allows any other props to be passed
}

export const Navigation = (): React.JSX.Element => {


    const [isMobileHidden, setMobileHidden] = useState(true);
    const [isClosedClicked, setClosedClicked] = useState(false);

    const changemenu = () => {
        setMobileHidden(!isMobileHidden);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changemenu();
        }
    };
    const close = () => {
        setClosedClicked(true);
        changemenu();
    };

    const closeOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') close();
    };

    //This method sees what page is active and then bolds the active page's text
    const CustomLink = ({ to, children, ...props }: CustomLinkProps) => {
        const router = useRouter();
        const isActive = router.pathname === to;
        return (
            <li className={clsx({
                [styles['nav_links_active']]: isActive,
                [styles['nav_links']]: !isActive
            })}>
                <Link href={to} passHref {...props}>
                    {children}
                </Link>
            </li>
        );
    }


    return (
        <nav className={styles.header}>
            <div className={styles.header__left}>
                <Link href='/'><h2>Job Derksen</h2></Link>
            </div>
            <div className={styles.header__right}>
                <div
                    className={styles.header__menu}
                    onClick={changemenu}
                    onKeyDown={handleKeyPress}
                >
                    <Image src={hamburgerIcon} alt='icon' className={'icons'} style={{ height: '20px', width: '30px'}} />
                </div>
                <div
                    className={clsx({
                        [styles['slide-out-animation']]: isClosedClicked,
                        [styles['header__desktop-links']]: isMobileHidden,
                        [styles['header__mobile-links']]: !isMobileHidden,
                    })}
                >
                    <div className={styles['header__mobile-close-container']}>
                        <div
                            onClick={close}
                            onKeyDown={closeOnKeyPress}
                            className={styles['header__mobile-close']}
                        >
                            <Image src={closeIcon} alt='icon' className={'icons'} style={{ height: '20px', width: '20px' }} />

                        </div>
                    </div>
                    <div className={styles['header__right-links']}>
                        <ul className={styles.nav_links}>
                            <CustomLink to={'/about'} className='header__nav-link'>About Me</CustomLink>
                            <CustomLink to={'/projects'} className='header__nav-link'>My Projects</CustomLink>
                            <CustomLink to={'/contact'} className='header__nav-link'>Contact me</CustomLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}