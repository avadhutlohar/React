
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {
  return(
  <div id='calculator' className={styles.calculator}>
    <Display/>
    <ButtonsContainer/>
  </div>)
}

export default App
