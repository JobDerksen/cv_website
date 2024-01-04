import React from 'react';
import styles from './Email.module.scss'

const EmailIcon: React.FC = () => {
    return (
        <div className={styles.emailIcon} style={{zIndex:-10}}>
            <div className={styles.letter1}/>
            <div className={styles.letter2}/>
        </div>
    );
};

export default EmailIcon;