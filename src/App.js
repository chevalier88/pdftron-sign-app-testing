import React from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AssignUsers from './components/AssignUsers';
import Preparation from './components/Preparation';
import Sign from './components/Sign';
import View from './components/View';
import Welcome from './components/Welcome';
import Home from './components/Home'

import './App.css';

const App = () => {


  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/fakeDocusign" exact element={<Welcome />} />
            <Route path="/assignUsers" exact element={<AssignUsers />} />
            <Route path="/prepareDocument" exact element={<Preparation />} />
            <Route path="/signDocument" exact element={<Sign />} />
            <Route path="/viewDocument" exact element={<View />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
};

export default App;
