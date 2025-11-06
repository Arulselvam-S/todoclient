import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Header from './Header'
import Contect from './Contect'
import Img from './Img'
const App = () => {   
  return (
    <div>
     <Router>
      <div>
        <Header/>
      </div>
      <Routes>
        <Route path='/img' element={<Img/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contect' element={<Contect/>} />
      </Routes>
     </Router>
    </div>

  )
}

export default App