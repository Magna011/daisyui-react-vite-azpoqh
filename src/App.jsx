import { useState } from 'react';
import './App.css';
import NavigationBar from './komponents/NavigationBar/NavigationBar'
import Footer from './komponents/Footer/Footer'
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Footer/>
    </div>
  );
}

export default App;
