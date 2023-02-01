import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Layout from './hoc/Layout/Layout';

const App = (props) => {
  return (
    <div className='App'>
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
