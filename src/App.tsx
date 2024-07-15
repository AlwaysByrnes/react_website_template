import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { Blogs } from "./pages/Blogs"
import { Navbar } from './components/navbar';
import './App.css';

function App() {
  return (
     <div className="App">
      <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<h2> PAGE NOT FOUND </h2>} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
