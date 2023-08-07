import styles from "./Header.module.scss"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { FC, useEffect, useRef } from "react"
import { selectCart } from "../../redux/cart/selectors"
 
export const Header: FC = () => {

    const { pathname } = useLocation()

    const isMounted = useRef(false)

    const { items, totalPrice } = useSelector(selectCart)
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)

    useEffect(()=>{
        if(isMounted.current){
            const json = JSON.stringify(items)
            localStorage.setItem('cart', json)
        }
        isMounted.current = true
    }, [items, totalPrice])

    return (
        <header>
            <div className={styles.container}>
                <Link to='/'>
                    <div className={styles.headerLeft}>
                        <img src="/img/logo.png" alt="Logotype" />
                        <div className={styles.description}>
                            <h1>REACT PIZZA</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                {pathname !== '/cart' &&
                    (<Link to='/cart'>
                        <div className={styles.headerRight}>
                            <p>{totalPrice} ₽</p>
                            <div className={styles.separator}></div>
                            <div className={styles.cart}>
                                <img src="/img/cartLogo.svg" alt="Cart" />
                                <p>{totalCount}</p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </header>
    )
}