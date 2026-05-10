import { Routes, Route } from 'react-router-dom';
import './app.css';

import LandingPage from './pages/LandingPage';

// --- SCHOOL GROUP ---
import SchoolLayout from './layouts/school/SchoolLayout';
import SchoolHomePage from './layouts/school/SchoolHomePage';
import SchoolDashboard from './layouts/school/SchoolDashboard';
import SchoolPage from './layouts/school/SchoolPage';

// --- E-COMMERCE GROUP ---
import EcomLayout from './layouts/ecommerce/EcomLayout';
import EcomHome from './layouts/ecommerce/EcomHome';
import EcomLogin from './layouts/ecommerce/EcomLogin';
import EcomDashboard from './layouts/ecommerce/EcomDashboard';

// --- DELIVERY GROUP ---
import DeliveryLayout from './layouts/delivery/DeliveryLayout';
import DeliveryHome from './layouts/delivery/DeliveryHome';
import DeliveryLogin from './layouts/delivery/DeliveryLogin';
import DeliveryDashboard from './layouts/delivery/DeliveryDashboard';

// --- PORTFOLIO GROUP ---
import PortfolioLayout from './layouts/portfolio/PortfolioLayout';
import PortfolioHome from './layouts/portfolio/PortfolioHome';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* --- SCHOOL UI GROUP (FIXED) --- */}
        {/* 1. The Landing Page Gallery */}
        <Route path="/school/SchoolHome" element={<SchoolHomePage />} />
        
        {/* 2. The Login Templates Gallery */}
        <Route path="/school/SchoolLogin" element={<SchoolPage />} />
        
        {/* 3. The Dashboard (Nested inside Layout) */}
        <Route path="/school" element={<SchoolLayout />}>
          <Route path="dashboard" element={<SchoolDashboard />} />
        </Route>


        {/* E-Commerce UI Group */}
        <Route path="/ecommerce">
          <Route path="login" element={<EcomLogin />} />
          <Route element={<EcomLayout />}>
            <Route path="home" element={<EcomHome />} />
            <Route path="dashboard" element={<EcomDashboard />} />
          </Route>
        </Route>

        {/* Delivery UI Group */}
        <Route path="/delivery">
          <Route path="login" element={<DeliveryLogin />} />
          <Route element={<DeliveryLayout />}>
            <Route path="home" element={<DeliveryHome />} />
            <Route path="dashboard" element={<DeliveryDashboard />} />
          </Route>
        </Route>

        {/* Portfolio UI Group */}
        <Route path="/portfolio">
          <Route element={<PortfolioLayout />}>
            <Route path="home" element={<PortfolioHome />} />
          </Route>
        </Route>

        {/* 404 Catch-all */}
        <Route path="*" element={
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;