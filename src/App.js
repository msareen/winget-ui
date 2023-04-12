import React, { useState } from 'react';
import WinAppSearch from './components/win-app-search/WinAppSearch';
import WinAppDetails from './components/win-app-details/WinAppDetails';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <Routes basename={'/'}>
         <Route path='/' element={<WinAppSearch />}></Route>
         <Route exact path='/winget-ui/details' element={<WinAppDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
