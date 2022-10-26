import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Service from './components/Service/Service'
import Team from './components/Team/Team'

function App() {

  return (
    <div className="App">
      <Header/>
      <About/>
      <Service/>
      <Team/>
    </div>
  )
}

export default App
