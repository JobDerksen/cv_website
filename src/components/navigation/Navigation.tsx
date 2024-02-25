import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './Navigation.module.scss'
import XIcon from '@/components/icons/xIcon/xIcon'
import { Link } from "react-scroll";
import useWindowDimensions from "../../hooks/useWindowDimensions"

export const Navigation = (): React.JSX.Element => {
    const [isMobileScreen, setMobileScreen] = useState(false);
    const [isActive, setActive] = useState(false)
    const screenWidth = useWindowDimensions().width;

    /*useEffect checks if the screen type, this is to control the menu type - Mobile menu or desktop menu
     and tablet menu which is a combination*/
    useEffect(()=>{
        if(screenWidth <= 800) setMobileScreen(true);
        else setMobileScreen(false);
    },[screenWidth])

    //hides mobile menu when a scroll happens
    useEffect(() => {
        function closeMenu(){
            if(isActive && isMobileScreen) setActive(!isActive)
        }
        window.addEventListener('scroll', closeMenu);
        return () => {
            window.removeEventListener('scroll', closeMenu);
        };
    }, [isActive, isMobileScreen]);

    //when page link is pressed on mobile menu and changes hamburger/X icon
    const linkSelected = () => {
        if(isMobileScreen){
            setActive(!isActive)
        }
    }

    //if on tablet or mobile the scroll offset has to account for the menu
    const returnOffset = () => {
        if(screenWidth <= 1400){
            return -52;
        }
        else {
            return 0
        }

    }

    return (
        <nav className={styles.header}>
            <div className={styles.header__left}>
                <Link
                    to='#home'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={()=>{
                        setActive(false)
                    }}

                >
                    <h2>
                        <span style={{fontWeight:600}}>Job</span> <span>Derksen</span>
                    </h2>
                </Link>
            </div>

            <div className={styles.header__right}>
                <div
                    className={styles.header__menu}
                    onClick={()=>{
                        setActive(!isActive)
                    }}
                    style={{position:"absolute", zIndex:10001}}
                >
                    <div onClick={()=>{setActive(!isActive)}}>
                        <XIcon receivedState={isActive}/>
                    </div>
                </div>
                <div
                    className={clsx({
                        [styles['slide-out-animation']]: isMobileScreen && isActive,
                        [styles['header__desktop-links']]: !isActive,
                        [styles['header__mobile-links']]: isActive
                    })}
                >

                    <div className={styles['header__right-links']}>
                        <ul className={styles.nav_links}>
                            <li>
                                <Link
                                    to={'#about'}
                                    className={styles.nav_links_notActive}
                                    activeClass={styles.nav_links_active}
                                    spy={true}
                                    smooth={true}
                                    offset={returnOffset()}
                                    duration={500}
                                    onClick={()=>{
                                        linkSelected()
                                    }}
                                    isDynamic={true}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'#portfolio'}
                                    className={styles.nav_links_notActive}
                                    activeClass={styles.nav_links_active}
                                    spy={true}
                                    smooth={true}
                                    offset={returnOffset()}
                                    duration={500}
                                    onClick={()=>{
                                        linkSelected()
                                    }}
                                    isDynamic={true}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'#contact'}
                                    className={styles.nav_links_notActive}
                                    activeClass={styles.nav_links_active}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    onClick={()=>{
                                        linkSelected()
                                    }}
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
