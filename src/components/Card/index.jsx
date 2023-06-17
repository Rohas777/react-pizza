import styles from "./Card.module.scss"
import React from 'react'

export default function Card({ id, imageUrl, title, price, sizes, types }) {
    const [activeThickness, setActiveThickness] = React.useState(0)
    const [activeWidth, setActiveWidth] = React.useState(0)
    const thickness = ['тонкое', 'традиционное']

    return (
        < div className={styles.card} >
            <img src={imageUrl} alt="Pizza" />
            <h2>{title}</h2>
            <div className={styles.characteristics}>
                <ul>
                    {
                        types.map((item, index) => (
                            <li
                                key={item}
                                onClick={() => setActiveThickness(item)}
                                className={activeThickness === item ? styles.active : ''}
                            >{thickness[item]}</li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        sizes.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveWidth(index)}
                                className={activeWidth === index ? styles.active : ''}
                            >{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.price}>
                <p>от {price} ₽</p>
                <div className={styles.add}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E" />
                    </svg>
                    <p>Добавить </p>
                    <p className={styles.count}>2</p>
                </div>
            </div>
        </div>
    )
}

