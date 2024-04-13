import Chart from './components/Chart';
import Navbar from './components/Navbar';
import ShortTermAnalysis from './components/ShortTermAnalysis';
import Stocks from './components/Stocks';
import { example_MSFT_data, example_MSFT_labels } from './data/example_data';

function App() {
  return (
    <div className='w-full h-screen bg-[#26272B] text-[#F4F4F4]'>
      <Navbar />
      <Stocks />
      <Chart input_data={example_MSFT_data} input_labels={example_MSFT_labels}/>
      <ShortTermAnalysis data={example_MSFT_data} labels={example_MSFT_labels}/>
      
      
    </div>
  );
}

export default App;
