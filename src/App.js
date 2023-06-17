import styles from "./App.module.scss"
import Header from './components/Header';
import SortBlok from "./components/SortBlock";
import Card from "./components/Card";
import pizzas from "./assets/pizzas.json"

function App() {

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <SortBlok />
          <div className={styles.catalog}>
            <h1>Все пиццы</h1>
            <div className={styles.cards}>
              {
                pizzas.map(item => (
                  <Card
                    key={item.id}
                    {...item}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
