import styles from "./SortBlock.module.scss"
import React, { useRef } from "react"
import { useOutsideClick } from '../../assets/CustomHooks'

export default function SortBlok({ value, onClickSort, onOpenModal, isModalOpened, onClose }) {
    const sortRef = useRef(null)
    useOutsideClick(sortRef, onClose, isModalOpened)

    const sort = [
        { id: 0, name: 'популярности', property: 'rating', type: 'desc' },
        { id: 1, name: 'популярности', property: 'rating', type: 'asc' },
        { id: 2, name: 'цене', property: 'price', type: 'desc' },
        { id: 3, name: 'цене', property: 'price', type: 'asc' },
        { id: 4, name: 'алфавиту', property: 'title', type: 'desc' },
        { id: 5, name: 'алфавиту', property: 'title', type: 'asc' }
    ]

    function onSelectCriterion(index) {
        onClickSort(index)
        onClose()
    }

    return (
        <div
            className={styles.wrapper}
            ref={sortRef}
        >
            <div className={styles.sort}>
                <div className={styles.head} onClick={onOpenModal}>
                    <img src="/img/arrow.svg" alt="Open Sort Menu"
                        style={isModalOpened ? { transform: "rotate(0deg)" } : null} />
                    <p>Сортировка по: <span>{value.name}</span></p>
                </div>
                {isModalOpened &&
                    <ul
                        className={styles.options}
                        style={{ opacity: 1 }} //top: "100%",
                    >
                        {
                            sort.map((obj) => (
                                <li
                                    key={obj.id}
                                    onClick={() => onSelectCriterion(obj)}
                                    className={value.id === obj.id ? styles.active : ''}
                                >{obj.name} <img
                                        src="/img/arrow.svg" alt="arrow"
                                        style={obj.type === 'asc' ? { transform: "rotate(0deg)" } : null}
                                    /> </li>
                            ))
                        }
                    </ul>}
            </div>
        </div >
    )
}

