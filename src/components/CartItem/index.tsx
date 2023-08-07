import { useDispatch } from "react-redux"

import styles from "./CartItem.module.scss"
import { FC, useState } from "react";
import { addPizza, minusPizza, removePizza } from "../../redux/cart/slice";

type CartItemProps = {
    id: string;
    title: string;
    thickness: string; 
    price: number; 
    count: number; 
    imageUrl: string; 
    width: number;
}

export const CartItem: FC<CartItemProps> = ({ id, title, thickness, price, count, imageUrl, width }) => {
    const dispatch = useDispatch()

    const [disableBtn, setDisableBtn] = useState(false)

    const onClickPlus = () => {
        dispatch(addPizza({
            id, title, thickness, price, count, imageUrl, width
        }))
    }

    const onClickMinus = () => {
        if (count > 1) {
            dispatch(minusPizza(id))
        } else {
            setDisableBtn(true)
        }
        // else {
        //     if (window.confirm('Вы уверены что хотите удалить позицию из корзины?')) {
        //         dispatch(removePizza(id))
        //     }
        // }
    }

    const onClickRemove = () => {
        if (window.confirm('Вы уверены что хотите удалить позицию из корзины?')) {
            dispatch(removePizza(id))
        }
    }

    return (
        <div className={styles.item}>
            <img src={imageUrl} alt="Pizza" />
            <div className={styles.description}>
                <h3>{title}</h3>
                <p>{thickness}, {width} см.</p>
            </div>
            <div className={styles.params}>
                <div className={styles.counter}>
                    <div 
                        onClick={onClickMinus} 
                        className={count > 1 ? styles.btn : styles.btn + ' ' + styles.disable}> {/*styles.minus + ' ' + styles.btn*/}
                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z" fill="#FE5F1E" />
                        </svg>
                    </div>
                    <b>{count}</b>
                    <div onClick={onClickPlus} className={styles.plus + ' ' + styles.btn}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E" />
                        </svg>
                    </div>
                </div>
                <p>{price * count} ₽</p>
                <div onClick={onClickRemove} className={styles.remove + ' ' + styles.btn}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#D7D7D7" />
                    </svg>
                </div>
            </div>
        </div>
    )
}