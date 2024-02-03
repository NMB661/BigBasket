import React from 'react'
import './App.css'
import Nav1 from './First/Nav1'
import Aboutus from './First/Aboutus'
import Home from './First/Home'
import Table1 from './Table1'
import Firststyle from './Firststyle'
import Slideshow from './Slideshow'
import Tformat from './Tformat'
import FV from './First/FV'
import Contact from './First/Contact'
import Cake from './First/Cake'
import Task1 from './First/Task1'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
 
  return (
    <>
    {/* <Firststyle />
    <hr></hr>
    <Table1 />
    <hr></hr>
    <Slideshow />
    <hr></hr>
    <br></br> */}
    <BrowserRouter>
    <Nav1 />
    <Routes>
    <Route path='/home' element={<Home />} />
   <Route path='/about' element={<Aboutus />} />
   <Route path='/fv' element={<FV />} />
   <Route path='/msg' element={<Contact />} />
   <Route path='/cake' element={<Cake />} />
   <Route path='/task1' element={<Task1 />} />
    </Routes>
    </BrowserRouter>
    <br></br>
    <hr></hr>
    {/* <Tformat/> */}
    </>

  
  
  )
}

export default App