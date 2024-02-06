import styles from "./xIcon.module.scss"
import React from "react";
interface IconProps {
    receivedState: boolean;
}
const XIcon: React.FC<IconProps> = ({ receivedState}) => {
    return (
        <div
            className={`${styles.container} ${receivedState ? styles.change : ''}`}

        >
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
        </div>
    )
}

export default XIcon
