import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Router>
            <Routes>
                <Route path="/" />
                <Route path="/cart"/>
            </Routes>
        </Router>
        
    </div>
  )
}

export default App;
