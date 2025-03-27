import { useState } from 'react'
import './App.css'
import Heading from './Heading/Heading'
import CalculatorBox from './CalculatorBox/CalculatorBox'
import Error from './Error/Error'
import { ErrorContext } from './store/context'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryPage from './History/HistoryPage'

function App() {

  const [display, setDisplay] = useState(false);
  

  return (
    <>

      <ErrorContext.Provider value={{ display, setDisplay }}>
        <BrowserRouter>
          <Heading />
          <Routes>
            <Route path='/' element={<CalculatorBox />}></Route>
            <Route path='/history' element={<HistoryPage />}></Route>
          </Routes>
          <div>
            <Error />
          </div>
        </BrowserRouter>
      </ErrorContext.Provider>



    </>
  )
}

export default App
