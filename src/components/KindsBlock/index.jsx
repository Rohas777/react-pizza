import styles from "./KindsBlock.module.scss"
import React from "react"

export default function KindsBlock({ value, onClickKind }) {


    const kinds = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    return (
        <div className={styles.kinds}>
            <ul>
                {
                    kinds.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => onClickKind(index)}
                            className={value === index ? styles.active : ''}
                        >{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

