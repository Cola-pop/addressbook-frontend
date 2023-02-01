import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Layout from './hoc/Layout/Layout';

const App = (props) => {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
