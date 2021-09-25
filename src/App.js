import './App.css';
import React from 'react'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title='TV' />
      <RowPost title='Movie' />
    </div>
  );
}

export default App;
