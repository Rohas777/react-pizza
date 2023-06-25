import { useContext, useEffect, useState } from "react"

import styles from "./Home.module.scss"

import SortBlok from "../../components/SortBlock";
import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";
import KindsBlock from "../../components/KindsBlock";
import Search from "../../components/Search";
import Pagination from "../../components/Pagination";
import { SearchContext } from "../../App";

export default function Home() {
    const { searchValue } = useContext(SearchContext)
    const [pizza, setPizza] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpened, setModalOpened] = useState(false)
    const [isSearchOpened, setSearchOpened] = useState(false)
    const [kindId, setKindId] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [sortType, setSortType] = useState({
        id: 0,
        name: 'популярности',
        property: 'rating',
        type: 'desc'
    })

    const onCloseSearch = () => {
        setSearchOpened(false)
    }
    const onCloseModal = () => {
        setModalOpened(false)
    }

    useEffect(() => {
        setIsLoading(true)
        const kind = kindId > 0 ? `category=${kindId}` : ''
        const search = searchValue ? `${searchValue}` : ''
        const urlParams = `page=${currentPage}&limit=8&${kind}&sortBy=${sortType.property}&order=${sortType.type}&search=${search}` //ПОИСК ПО БЭКЭНДУ, НО МОКАПИ НАГЛО ВРЁТ
        fetch(`https://64874035beba6297279053e8.mockapi.io/pizza?${urlParams}`)
            .then(res => res.json())
            .then(json => {
                setPizza(json)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [kindId, sortType, searchValue, currentPage])

    const skeletons = [...new Array(8)].map((_, index) => (
        <div className={styles.shell}>
            <Skeleton key={index} />
        </div>
    ))

    const pizzas = pizza
        // .filter(obj => {  //ПОИСК ДЛЯ СТАТИКИ
        //     if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        //         return true
        //     }
        //     return false
        // })
        .map(obj => (
            <div className={styles.shell}>
                <Card
                    key={obj.id}
                    {...obj}
                />
            </div>
        ))

    return (
        <>
            <div className={styles.menu}>
                <KindsBlock value={kindId} onClickKind={(index) => setKindId(index)} />
                <SortBlok
                    value={sortType}
                    onClickSort={(index) => setSortType(index)}
                    onClose={onCloseModal}
                    onOpenModal={() => setModalOpened(!isModalOpened)}
                    isModalOpened={isModalOpened}
                />
            </div>
            <div className={styles.catalog}>
                <div className={styles.head}>
                    <h1>Все пиццы</h1>
                    <Search
                        isSearchOpened={isSearchOpened}
                        onClickSearch={() => setSearchOpened(true)}
                        onClose={onCloseSearch}
                    />
                </div>
                <div className={styles.cards}>{isLoading ? skeletons : pizzas}</div>
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)} />
        </>
    )
}

