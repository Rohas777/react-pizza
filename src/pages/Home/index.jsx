import React from "react"

import styles from "./Home.module.scss"

import SortBlok from "../../components/SortBlock";
import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";

export default function Home() {
    const [pizza, setPizza] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch("https://64874035beba6297279053e8.mockapi.io/pizza")
            .then(res => res.json())
            .then(json => {
                setPizza(json)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <SortBlok />
            <div className={styles.catalog}>
                <h1>Все пиццы</h1>
                <div className={styles.cards}>
                    {
                        isLoading
                            ? [...new Array(8)].map((_, index) => (
                                <div className={styles.shell}>
                                    <Skeleton key={index} />
                                </div>
                            ))
                            : pizza.map(item => (
                                <div className={styles.shell}>
                                    <Card
                                        key={item.id}
                                        {...item}
                                    />
                                </div>
                            ))
                    }
                </div>
            </div>
        </>
    )
}

