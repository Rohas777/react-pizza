import { FC } from 'react'
import styles from './MainLayout.module.scss'
import {Header} from '../../components'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
    return (
        <div className={styles.app}>
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.container}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout