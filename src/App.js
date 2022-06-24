import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './News';
import { BrowserRouter, Routes, Route} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <div className='my-2 mx-4'>
    
      <Navbar/>
      <Routes>
        <Route exact path="/"  key="general" element={<News country="in" category="general"/>}/>
        </Routes>
        
        <Routes>
        <Route exact path="/general"  key="general" element={<News country="in" category="general"/>}/>
        </Routes>
        <Routes>
        <Route exact path="/business"  key="business" element={<News country="in" category="business"/>}/>
        </Routes>
        <Routes>
        <Route exact path="/entertainment"  key="entertainment" element={<News country="in" category="entertainment"/>}/>
        </Routes>
        <Routes>
        <Route exact path="/health"  key="health" element={<News country="in" category="health"/>}/>
        </Routes>
        <Routes>  
        <Route exact path="/science"  key="science" element={<News country="in" category="science"/>}/>
        </Routes>
        <Routes>
        <Route exact path="/Technology"  key="technology" element={<News country="in" category="technology"/>}/>
        </Routes>
        <Routes>
        <Route exact path="/sports"  key="sports" element={<News country="in" category="sports"/>}/>
        </Routes>
        
    
        
        
      </div>
      </BrowserRouter>
      </>
    )
  }
}



