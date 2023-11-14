import ClockSlogan from './components/ClockSlogan'
import ClockHeader from './components/ClockHeader'
import CurrentTime from './components/CurrentTime'
import './App.css'

function App() {
  return(
    <center>
      <ClockHeader></ClockHeader>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  )
}

export default App
