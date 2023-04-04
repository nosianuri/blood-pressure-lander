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
import LifelineSg from './Pages/LifelineSg/LifelineSg';
import Erc from './Pages/Erc/Erc';
import Preloader from './Pages/Share/Preloader';
import TrailPage from './components/TrailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/trial' element={<TrailPage />} />
        <Route path='/bloodpressure911' element={<Home />} />
        <Route path='/alpilean' element={<AlpileanHome />} />
        <Route path='/rmx' element={<RmxLander />} />
        <Route path='/green-coffee' element={<KetoWightLoss />} />
        <Route path='/keto-control' element={<KetoControlPro />} />
        <Route path='/keto-control2' element={<KetoControl />} />
        <Route path='/read-more' element={<Rmx2 />} />
        <Route path='/rmx2' element={<Rmx />} />
        <Route path='/lifeline-screening' element={<LifelineSg />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/terms-of-service' element={<Tos />} />
        <Route path='/erc' element={<Erc />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/alpileansite' element={<AlpileanNew />} />
      </Routes>
    </div>
  );
}

export default App;
