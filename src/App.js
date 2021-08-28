import React from 'react';
import './App.css';
import Card from './Components/Card';
import Encabezado from './Components/Encabezado';
import NavBar from './Components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Encabezado/>   
      <Card/>      
    </div>
  );
}

export default App;
