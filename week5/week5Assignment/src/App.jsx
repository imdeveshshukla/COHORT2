
import './App.css'
import BussinessCard from './Components/BussinessCard'

function App() {
  const personDet = {
    id:Math.ceil(Math.random()*1000),
    name:"Devesh Shukla",
    bio:"A student of MCA in IET Lucknow",
    interest:["Web Dev","DSA","Gaming"],
    links:["https://www.linkedin.com/in/imdeveshshukla/","https://www.linkedin.com/in/imdeveshshukla/"]
  }
  return (
    <div>
    <BussinessCard  personDet={personDet}></BussinessCard>
    </div>
  )
}

export default App
