import React from "react"
import { Link } from "react-router-dom"

import styles from "./CartEmpty.module.scss"

const CartEmpty: React.FC = () => {


    return (
        <>
            <div className={styles.empty}>
                <h2>Корзина пустая <span>😕</span> </h2>
                <p>Вероятней всего, вы не заказывали ещё пиццу. <br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src="/img/cartEmpty.svg" alt="Cart Empty" />
                <Link to='/'>
                    <div className={styles.back}>Вернуться назад</div>
                </Link>
            </div>
        </>
    )
}

export default CartEmpty