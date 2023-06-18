import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import pizzas from "./assets/pizzas.json"
import styles from "./App.module.scss"

import Header from './components/Header';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/not-found' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
