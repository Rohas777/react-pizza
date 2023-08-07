import { useNavigate, useParams } from 'react-router-dom'
import styles from './FullPizza.module.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = useState<{
        imageUrl: string
        title: string
        price: number
    }>()

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get('https://64874035beba6297279053e8.mockapi.io/pizza/' + id)
                setPizza(data)
            } catch (error) {
                alert('Ошибка при получении пиццы')
                navigate('/')
            }
        }

        fetchPizza()
    }, [])

    if (!pizza) {
        return <p className={styles.loading}>Loading...</p>
    }

    return (
        <div className={styles.fullPizza}>
            <img src={pizza.imageUrl} alt="Pizza" />
            <div className={styles.description}>
                <h2>{pizza.title}</h2>
                <span>{pizza.price} ₽</span>
            </div>
        </div>
    )
}

export default FullPizza