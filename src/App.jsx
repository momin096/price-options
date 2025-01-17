
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      {/* <DaisyNav/> */}
      <NavBar />
      <PriceOptions />
      <LineChart />
    </>
  )
}

export default App
