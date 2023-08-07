import React, { FC } from "react"
import styles from "./KindsBlock.module.scss"

type KindsProps = {
    value: number;
    onChangeCategory: (index: number) => void;
}

const kinds = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
]

export const KindsBlock: FC<KindsProps> = React.memo(({ value, onChangeCategory }) => {
    return (
        <div className={styles.kinds}>
            <ul>
                {
                    kinds.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => onChangeCategory(index)}
                            className={value === index ? styles.active : ''}
                        >{item}</li>
                    ))
                }
            </ul>
        </div>
    )
})