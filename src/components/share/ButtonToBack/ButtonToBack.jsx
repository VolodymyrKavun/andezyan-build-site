import React from 'react';
import Image from 'next/image';
import styles from './ButtonToBack.module.css';


const ButtonToBack = ({ onClick }) => {
    return (
        <button className={styles.buttonToBack} onClick={onClick}>
            <div className={styles.iconBackWrapper}>
                <Image
                    src="/sprite/icon_arrow-down-circle.svg"
                    alt="Кнопка повернення"
                    fill={true}
                    className={styles.iconBack}
                />
            </div>
        </button>
    )
}


export default ButtonToBack;