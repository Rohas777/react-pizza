import styles from "./App.module.scss"
import Header from './components/Header';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
        </div>
      </div>
    </div>
  );
}

export default App;
