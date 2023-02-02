import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Layout from './hoc/Layout/Layout';
import TableView from './pages/TableView/TableView';

const App = (props) => {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/table-view' element={<TableView />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
