import styles from "./NotFound.module.scss"
import React from "react"

export default function NotFound() {

    return (
        <div className={styles.notFound}>
            <span>😕</span>
            <h1>Ничего не найдено</h1>
            <p>К сожалению данная страница не действует в нашем интернет-магазине</p>
        </div>
    )
}

