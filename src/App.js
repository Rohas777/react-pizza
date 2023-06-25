import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// import pizzas from "./assets/pizzas.json"
import styles from "./App.module.scss"

import Header from './components/Header';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/not-found' element={<NotFound />} />
            </Routes>
          </SearchContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
