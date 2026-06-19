import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GautengLandingPage from './pages/GautengLandingPage';
import ServicesPage from './pages/ServicesPage';
import AreasPage from './pages/AreasPage';
import NotFoundPage from './pages/NotFoundPage';

// Area pages
import AutoElectricianJohannesburg from './pages/areas/AutoElectricianJohannesburg';
import AutoElectricianSandton from './pages/areas/AutoElectricianSandton';
import AutoElectricianMidrand from './pages/areas/AutoElectricianMidrand';
import AutoElectricianRandburg from './pages/areas/AutoElectricianRandburg';

// Service pages
import BatteryReplacement from './pages/services/BatteryReplacement';
import StarterMotorRepair from './pages/services/StarterMotorRepair';
import AlternatorRepair from './pages/services/AlternatorRepair';
import CarDiagnostics from './pages/services/CarDiagnostics';
import WiringRepair from './pages/services/WiringRepair';
import JumpStart from './pages/services/JumpStart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Core pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/areas" element={<AreasPage />} />
          <Route path="/autoelectrician/gauteng" element={<GautengLandingPage />} />

          {/* Area landing pages */}
          <Route path="/auto-electrician-johannesburg" element={<AutoElectricianJohannesburg />} />
          <Route path="/auto-electrician-sandton" element={<AutoElectricianSandton />} />
          <Route path="/auto-electrician-midrand" element={<AutoElectricianMidrand />} />
          <Route path="/auto-electrician-randburg" element={<AutoElectricianRandburg />} />

          {/* Service landing pages */}
          <Route path="/battery-replacement-johannesburg" element={<BatteryReplacement />} />
          <Route path="/starter-motor-repair-johannesburg" element={<StarterMotorRepair />} />
          <Route path="/alternator-repair-johannesburg" element={<AlternatorRepair />} />
          <Route path="/car-diagnostics-johannesburg" element={<CarDiagnostics />} />
          <Route path="/car-wiring-repair-johannesburg" element={<WiringRepair />} />
          <Route path="/jump-start-johannesburg" element={<JumpStart />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
