import { useState } from 'react'
import AgeCalculator from './components/AgeCalculator.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
    <div className="App flex justify-center text-center width-full p-[5rem] h-[500px]">
      <AgeCalculator/>
    </div>
  );
}

export default App
