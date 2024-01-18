import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './Navigation.module.scss'
import {useRouter} from "next/router";
import XIcon from '@/components/icons/xIcon/xIcon'
import { Link } from "react-scroll";

export const Navigation = (): React.JSX.Element => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.width : 800;
    const router = useRouter();
    const [isMobileMenuHidden, setMobileMenuHidden] = useState(true);
    const [isMobileScreen, setMobileScreen] = useState(false);
    const [isActive, setActive] = useState(false)

    useEffect(()=>{
        if(screenWidth < 800 && router.pathname !== '/') setMobileScreen(true)
        else setMobileScreen(false)
    },[router.pathname, screenWidth])

    const changemenu = () => {
        setMobileScreen(true)
        setMobileMenuHidden(!isMobileMenuHidden);
    };

    const linkSelected = () => {
        if(isMobileScreen){
            setActive(!isActive)
            changemenu();
        }
    }

    const homeSelected = ()=>{
        if(!isMobileMenuHidden)
            linkSelected()
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changemenu();
        }
    };

    return (
        <nav className={styles.header}>
            <div className={styles.header__left}>
                <Link to='/' spy={true} smooth={true} offset={0} duration={500} onClick={homeSelected}>
                    <h2>
                        <span style={{fontWeight:600}}>Job</span> <span>Derksen</span>
                    </h2>
                </Link>
            </div>

            <div className={styles.header__right}>
                <div
                    className={styles.header__menu}
                    onClick={changemenu}
                    onKeyDown={handleKeyPress}
                    style={{position:"absolute", zIndex:10001}}
                >
                    <XIcon receivedState={isActive}/>
                </div>
                <div
                    className={clsx({
                        [styles['slide-out-animation']]: isMobileScreen,
                        [styles['header__desktop-links']]: isMobileMenuHidden,
                        [styles['header__mobile-links']]: !isMobileMenuHidden
                    })}
                >

                    <div className={styles['header__right-links']}>
                        <ul className={styles.nav_links}>
                            <li>
                                <Link
                                    to={'/about'}
                                    className={styles.nav_links_notActive}
                                    activeClass={styles.nav_links_active}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    onClick={linkSelected}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/projects'}
                                    className={styles.nav_links_notActive}
                                    activeClass={styles.nav_links_active}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    onClick={linkSelected}
                                >

                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/contact'}
                                    className={styles.nav_links_notActive}
                                    activeClass={styles.nav_links_active}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    onClick={linkSelected}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}
