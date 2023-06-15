import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.headerLeft}>
                    <img src="/img/logo.png" alt="Logotype" />
                    <div className={styles.description}>
                        <h1>REACT PIZZA</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <p>520 ₽</p>
                    <div className={styles.separator}></div>
                    <div className={styles.cart}>
                        <img src="/img/cartLogo.svg" alt="Cart" />
                        <p>3</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

