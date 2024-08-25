import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Models from './components/Models';
import Dataset from './components/Dataset';
import TweetContainer from './components/TweetContainer';

function App() {
  return (
    <>
      <Router basename="/cyberbullying-tweet-detection/">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/models" element={<Models/>}></Route>
          <Route path="/dataset" element={<Dataset/>}></Route>
          <Route path="/submit-tweet" element={<TweetContainer />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
