import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Helpline from './components/Helpline';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:state' element={<Helpline/>}/>
    </Routes>
  )
}

export default App