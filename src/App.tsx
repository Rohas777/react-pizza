import { Routes, Route } from 'react-router-dom'

import styles from "./App.module.scss"

import Home from "./pages/Home";
import MainLayout from './layouts/MainLayout';
import React, { Suspense } from 'react';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ "./pages/Cart"));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound"));

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={
          <Suspense fallback={<div className={styles.loading}>Идёт загрузка корзины...</div>}>
            <Cart/>
          </Suspense>
        } />
        <Route path='pizza/:id' element={
          <Suspense fallback={<div className={styles.loading}>Идёт загрузка профиля пиццы...</div>}>
            <FullPizza/>
          </Suspense>
        } />
        <Route path='not-found' element={
          <Suspense fallback={<div className={styles.loading}>Идёт загрузка страницы 404... *facepalm*</div>}>
            <NotFound/>
          </Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;
