import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost/>
      <RowPost/>
      <RowPost/>
      <RowPost/>
      <RowPost/>
    </div>
  );
}

export default App;
