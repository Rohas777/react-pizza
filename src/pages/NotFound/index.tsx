import { FC } from "react"
import styles from "./NotFound.module.scss"

const NotFound: FC = () => {
    return (
        <div className={styles.notFound}>
            <span>😕</span>
            <h2>Ничего не найдено</h2>
            <p>К сожалению данная страница не действует в нашем интернет-магазине</p>
        </div>
    )
}

export default NotFound