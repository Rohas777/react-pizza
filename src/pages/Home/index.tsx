import { FC, useCallback, useEffect, useRef } from "react"
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import styles from "./Home.module.scss"

import {Pagination, Search, KindsBlock, Skeleton, Card, SortBlok} from "../../components";

import { sortList } from "../../components/SortBlock";
import { useAppDispatch } from "../../redux/store";
import { selectPizza, selectPizzaItems } from "../../redux/pizza/selectors";
import { selectFilter } from "../../redux/filter/selectors";
import { setCategoryId, setCurrentPage, setFilters } from "../../redux/filter/slice";
import { fetchPizzas } from "../../redux/pizza/asyncActions";

const Home: FC = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const pizza = useSelector(selectPizzaItems)
    const { status } = useSelector(selectPizza)
    const { categoryId, sortType, currentPage, searchValue } = useSelector(selectFilter)

    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const onChangePage = (count: number) => {
        dispatch(setCurrentPage(count))
    }

    const onChangeCategory = useCallback((index: number) => {
        dispatch(setCategoryId(index))
    }, [])

    const getPizzas = async () => {

        const sortBy = sortType.property
        const order = sortType.type
        const kind = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `${searchValue}` : ''
            
        dispatch(fetchPizzas({
            sortBy,
            order,
            kind,
            search,
            currentPage: String(currentPage)
        }))
    }

    //Если изменили параметры и был первый рендер, то создаём URL-параметры
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType.property,
                categoryId,
                currentPage,
            })

            navigate(`?${queryString}`)
        }

        isMounted.current = true

    }, [categoryId, sortType, currentPage])

    //Если был первый рендер, то проверяем URL-параметры и сохраняем в Redux
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            
            const sort = sortList.find(obj => obj.property === params.sortProperty)

            if(sort){
                dispatch(
                setFilters({
                    searchValue: String(params.search),
                    categoryId: Number(params.categoryId),
                    currentPage: Number(params.currentPage),
                    sortType: sort
                }))
            }
            isSearch.current = true
        }
    }, [])

    //Если был первый рендер, то запрашиваем пиццы
    useEffect(() => {
        window.scrollTo(0, 0)

        if (!isSearch.current) {
            getPizzas()
        }

        isSearch.current = false

    }, [categoryId, sortType, searchValue, currentPage])


    const skeletons = [...new Array(8)].map((_, index) => (
        <div  key={index} className={styles.shell}>
            <Skeleton />
        </div>
    ))

    const pizzas = pizza
        .map((obj: any) => (
            <div key={obj.id} className={styles.shell}>
                <Card
                    {...obj}
                />
            </div>
        ))

    return (
        <>
            <div className={styles.menu}>
                <KindsBlock value={categoryId} onChangeCategory={onChangeCategory} />
                <SortBlok sortType={sortType}/>
            </div>
            <div className={styles.catalog}>
                <div className={styles.head}>
                    <h1>Все пиццы</h1>
                    <Search />
                </div>
                {
                    status === 'error' ? (
                        <div className={styles.error}>
                            <h2>Произошла ошибка <span>😕</span></h2>
                            <p>К сожалению, нам не удалось получить питсы. <br />
                                Попробуйте повторить попытку позднее.</p>
                        </div>
                    ) : (
                        <div className={styles.cards}>{status === 'loading' ? skeletons : pizzas}</div>
                    )
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
    )
}

export default Home