import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Alpilean from './Pages/Alpilean/Alpilean';
import AlpileanHome from './Pages/Alpilean/AlpileanHome';
import AlpileanNew from './Pages/AlpileanNew/AlpileanNew';
import KetoWightLoss from './Pages/Keto/KetoWightLoss';
import KetoControl from './Pages/Keto/KetoControl';
import RmxLander from './Pages/Rmx/RmxLander';
import Disclaimer from './Pages/RmxPro/Disclaimer';
import PrivacyPolicy from './Pages/RmxPro/PrivacyPolicy';
import Rmx from './Pages/RmxPro/Rmx';
import Tos from './Pages/RmxPro/Tos';
import KetoControlPro from './Pages/KetoControl/KetoControlPro';
import Rmx2 from './Pages/Rmx/Rmx2';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/bloodpressure911' element={<Home />} />
        <Route path='/alpilean' element={<AlpileanHome />} />
        <Route path='/rmx' element={<RmxLander />} />
        <Route path='/green-coffee' element={<KetoWightLoss />} />
        <Route path='/keto-control' element={<KetoControl />} />
        <Route path='/keto-control2' element={<KetoControlPro />} />
        <Route path='/read-more' element={<Rmx />} />
        <Route path='/rmx2' element={<Rmx2 />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/terms-of-service' element={<Tos />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/alpileansite' element={<AlpileanNew />} />
      </Routes>
    </div>
  );
}

export default App;
