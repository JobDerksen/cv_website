import React, {useState} from "react";
import styles from "./icon.module.scss"

type props = {
    state: (data: boolean) => void;
};
const Icon: React.FC<props> = ({state}) => {

    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
        state(isActive)
    }

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

export default Icon
