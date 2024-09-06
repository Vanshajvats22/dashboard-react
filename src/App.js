import React from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app-container" >
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />

      </div>
     
    </div>
  );
}

export default App;
