import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './Navigation.module.scss'
import XIcon from '@/components/icons/xIcon/xIcon'
import { Link } from "react-scroll";
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { useRouter } from 'next/router'

export const Navigation = (): React.JSX.Element => {
    const [isMobileMenuHidden, setMobileMenuHidden] = useState(true);
    const [isMobileScreen, setMobileScreen] = useState(false);
    const [isTabletScreen, setTabletScreen] = useState(false);
    const [isActive, setActive] = useState(false)
    const screenWidth = useWindowDimensions().width;
    const router = useRouter()

    /*useEffect checks if the screen type, this is to control the menu type - Mobile menu or desktop menu
     and tablet menu which is a combination*/
    useEffect(()=>{
        if(screenWidth < 1400) {
            setTabletScreen(true);
            setMobileScreen(false);
            if(screenWidth < 800){
                setMobileScreen(true);
                setTabletScreen(false);
            }
        }
        else {
            setMobileScreen(false);
            setTabletScreen(false);
        }
    },[screenWidth, router])

    //hides mobile menu when a scroll happens
    useEffect(() => {
        const handleScroll = () => {
            if(!isMobileMenuHidden && isMobileScreen){
                linkSelected()
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobileMenuHidden, isMobileScreen]);

    //hides and opens menu for mobile
    const changeMenu = () => {
        setMobileScreen(true)
        setMobileMenuHidden(!isMobileMenuHidden);
    };

    //when page link is pressed on mobile menu and changes hamburger/X icon
    const linkSelected = () => {
        if(isMobileScreen){
            setActive(!isActive)
            changeMenu();
        }
    }
    /*when home is pressed - makes sure menu doesn't open or hamburger
     changes but closes the menu if it is open (only use case really would be on home
     screen since if on other screen the scroll is activated which closes the menu anyway)*/
    const homeSelected = ()=>{
        if(!isMobileMenuHidden)
            linkSelected()
    }

    //if on tablet or mobile the scroll offset has to account for the menu
    const returnOffset = () => {
        if(isMobileScreen || isTabletScreen){
            return -52
        } else {
            return 0
        }
    }

    return (
        <nav className={styles.header}>
            <div className={styles.header__left}>
                <Link to='home' spy={true} smooth={true} offset={0} duration={500} onClick={homeSelected}>
                    <h2>
                        <span style={{fontWeight:600}}>Job</span> <span>Derksen</span>
                    </h2>
                </Link>
            </div>

            <div className={styles.header__right}>
                <div
                    className={styles.header__menu}
                    onClick={changeMenu}
                    style={{position:"absolute", zIndex:10001}}
                >
                    <XIcon receivedState={isActive}/>
                </div>
                <div
                    className={clsx({
                        [styles['slide-out-animation']]: isMobileScreen && !isTabletScreen,
                        [styles['header__desktop-links']]: isMobileMenuHidden,
                        [styles['header__mobile-links']]: !isMobileMenuHidden
                    })}
                >

                    <div className={styles['header__right-links']}>
                        <ul className={styles.nav_links}>
                            <li>
                                <Link
                                    to={'about'}
                                    className={styles.nav_links_notActive}
                                    activeClass={styles.nav_links_active}
                                    spy={true}
                                    smooth={true}
                                    offset={returnOffset()}
                                    duration={500}
                                    onClick={linkSelected}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'projects'}
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
                                    to={'contact'}
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
