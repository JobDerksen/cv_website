import React, {useEffect, useState} from "react";
import styles from "./xIcon.module.scss"
interface IconProps {
    receivedState: boolean;
}
const XIcon: React.FC<IconProps> = ({ receivedState}) => {

    const [isActive, setIsActive] = useState(true)
    const handleClick = () => {
        setIsActive(!isActive)
    }

    useEffect(()=>{
        setIsActive(!isActive)
    },[receivedState])

    return (
        <div
            className={`${styles.container} ${isActive ? styles.change : ''}`}
            onClick={handleClick}
        >
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
        </div>
    )
}

export default XIcon
