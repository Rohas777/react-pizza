import styles from "./SortBlock.module.scss"
import React from "react"

export default function SortBlok() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [activeCriterion, setActiveCriterion] = React.useState(0)


    const kinds = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    const sortCriterion = ['популярности', 'цене', 'алфавиту']

    function onSelectCriterion(index) {
        setActiveCriterion(index)
        setIsMenuOpen(false)
    }

    return (
        <div className={styles.menu}>
            <div className={styles.kinds}>
                <ul>
                    {
                        kinds.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={activeIndex === index ? styles.active : ''}
                            >{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.sort}>
                    <div className={styles.head} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src="/img/arrow.svg" alt="Open Sort Menu"
                            style={isMenuOpen ? { transform: "rotate(0deg)" } : null} />
                        <p>Сортировка по: <span>{sortCriterion[activeCriterion]}</span></p>
                    </div>
                    {isMenuOpen &&
                        <ul className={styles.options}
                            style={{ opacity: 1 }} //top: "100%",
                        >
                            {
                                sortCriterion.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => onSelectCriterion(index)}
                                        className={activeCriterion === index ? styles.active : ''}
                                    >{item}</li>
                                ))
                            }
                        </ul>}
                </div>
            </div>
        </div >
    )
}

