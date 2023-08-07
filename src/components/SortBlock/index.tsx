import styles from "./SortBlock.module.scss"
import React, { useRef, useState } from "react"
import { useOutsideClick } from '../../assets/CustomHooks'
import { useDispatch } from "react-redux"
import { FilterSortType } from "../../redux/filter/types"
import { setSortType } from "../../redux/filter/slice"

type SortListItem = {
    id: number;
    name: string;
    property: 'rating' | 'price' | 'title';
    type: 'desc' | 'asc';
}

export const sortList: SortListItem[] = [
    { id: 0, name: 'популярности', property: 'rating', type: 'desc' },
    { id: 1, name: 'популярности', property: 'rating', type: 'asc' },
    { id: 2, name: 'цене', property: 'price', type: 'desc' },
    { id: 3, name: 'цене', property: 'price', type: 'asc' },
    { id: 4, name: 'алфавиту', property: 'title', type: 'desc' },
    { id: 5, name: 'алфавиту', property: 'title', type: 'asc' }
]

type SortBlockProps = {
    sortType: FilterSortType;
}

export const SortBlok: React.FC<SortBlockProps> = React.memo(({sortType}) => {
    const dispatch = useDispatch()

    const [isModalOpened, setModalOpened] = useState(false)

    const onCloseModal = () => {
        setModalOpened(false)
    }
    const onOpenModal = () => {
        setModalOpened(!isModalOpened)
    }

    const sortRef = useRef<HTMLDivElement>(null)
    useOutsideClick(sortRef, onCloseModal, isModalOpened)

    function onSelectCriterion(obj:SortListItem) {
        dispatch(setSortType(obj))
        onCloseModal()
    }

    return (
        <div
            className={styles.wrapper}
            ref={sortRef}
        >
            <div className={styles.sort}>
                <div className={styles.head} onClick={onOpenModal}>
                    <img src="/img/arrow.svg" alt="Open Sort Menu"
                        style={isModalOpened ? { transform: "rotate(0deg)" } : undefined} />
                    <p>Сортировка по: <span>{sortType.name}</span></p>
                </div>
                {isModalOpened &&
                    <ul
                        className={styles.options}
                        style={{ opacity: 1 }} //top: "100%",
                    >
                        {
                            sortList.map((obj) => (
                                <li
                                    key={obj.id}
                                    onClick={() => onSelectCriterion(obj)}
                                    className={sortType.id === obj.id ? styles.active : ''}
                                >{obj.name}
                                    <img
                                        src="/img/arrow.svg" alt="arrow"
                                        style={obj.type === 'asc' ? { transform: "rotate(0deg)" } : undefined}
                                    />
                                </li>
                            ))
                        }
                    </ul>}
            </div>
        </div >
    )
})

// export default SortBlok