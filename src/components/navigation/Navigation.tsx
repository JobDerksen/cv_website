import React, {ReactNode, useState} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Navigation.module.scss'
import {useRouter} from "next/router";
import Icon from '../icon/icon'

interface CustomLinkProps {
    to: string;
    children: ReactNode;
    [key: string]: any; // This allows any other props to be passed
}

export const Navigation = (): React.JSX.Element => {
    const [isMobileMenuHidden, setMobileMenuHidden] = useState(true);
    const [isClosedClicked, setClosedClicked] = useState(false);

    const changemenu = () => {
        setMobileMenuHidden(!isMobileMenuHidden);
    };

    const handleIconState = (state: boolean) => {
        if(state){
            setClosedClicked(true);
            changemenu();
        } else
            setClosedClicked(false);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changemenu();
        }
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
                    style={{position:"absolute", zIndex:10001}}
                >
                    <Icon state={handleIconState}/>
                </div>
                <div
                    className={clsx({
                        [styles['slide-out-animation']]: isClosedClicked,
                        [styles['header__desktop-links']]: isMobileMenuHidden,
                        [styles['header__mobile-links']]: !isMobileMenuHidden
                    })}
                >

                    <div className={styles['header__right-links']}>
                        <ul className={styles.nav_links}>
                            <CustomLink to={'/about'} className='header__nav-link'>About Me</CustomLink>
                            <CustomLink to={'/projects'} className='header__nav-link'>Portfolio</CustomLink>
                            <CustomLink to={'/contact'} className='header__nav-link'>Contact me</CustomLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}