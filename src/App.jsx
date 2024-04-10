import './App.css';
import Navbar from './components/Navbar';
import stocks from './data/stock_data'
import Stocks from './components/Stocks';


function App() {
  return (
    <>
      <Navbar />
      <Stocks />
    </>
  );
}

export default App;
