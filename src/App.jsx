import { useState } from 'react'
import './App.css'
import Heading from './Heading/Heading'
import CalculatorBox from './CalculatorBox/CalculatorBox'
import Error from './Error/Error'
import { ErrorContext } from './store/context'

function App() {
 
  const [display, setDisplay] = useState(false);

  return (
    <>

      <ErrorContext.Provider value={{display, setDisplay}}>
      <Heading />
      <CalculatorBox />
      <div>
        <Error />
      </div>
      </ErrorContext.Provider>
      
      
    </>
  )
}

export default App
