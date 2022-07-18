import React, {useState} from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AssignUsers from './components/FakeDocusign/AssignUsers.jsx';
import Preparation from './components/FakeDocusign/Preparation.jsx';
import Sign from './components/FakeDocusign/Sign.jsx';
import View from './components/FakeDocusign/View.jsx';
import Welcome from './components/FakeDocusign/Welcome.jsx';
import Home from './components/FakeDocusign/Home.jsx'
import { UserContext } from './components/UserContext.jsx';

import './App.css';

const App = () => {
  const [user, setUser] = useState(
      {
        id : 1, 
        email : "test3@gmail.com"  
      }
    );

  return (
    <div>
        <BrowserRouter>
          <UserContext.Provider value={{ user }}>
            <Provider store={store}>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/fakeDocusign" exact element={<Welcome />} />
                <Route path="/assignUsers" exact element={<AssignUsers />} />
                <Route path="/prepareDocument" exact element={<Preparation />} />
                <Route path="/signDocument" exact element={<Sign />} />
                <Route path="/viewDocument" exact element={<View />} />
              </Routes>
            </Provider>
          </UserContext.Provider>
        </BrowserRouter>
    </div>
  )
};

export default App;
