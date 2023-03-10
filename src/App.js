import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Alpilean from './Pages/Alpilean/Alpilean';
import AlpileanHome from './Pages/Alpilean/AlpileanHome';
import AlpileanNew from './Pages/AlpileanNew/AlpileanNew';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/bloodpressure911' element={<Home />} />
        <Route path='/alpilean' element={<AlpileanHome />} />
        <Route path='/alpileansite' element={<AlpileanNew />} />
      </Routes>
    </div>
  );
}

export default App;
