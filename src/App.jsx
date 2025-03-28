import { useState } from 'react'
import './App.css'
import Heading from './Heading/Heading'
import CalculatorBox from './CalculatorBox/CalculatorBox'
import Error from './Error/Error'
import { ErrorContext } from './store/context'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryPage from './History/HistoryPage'

function App() {

  //This State is to set state of Error component in Input component using Context implementation.
  //Passing state through all routes using ErrorContext.Provider down below 
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
