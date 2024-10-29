import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.tsx';
import OrderPlacePage from '../pages/OrderPlacePage.tsx';
import OrderViewPage from '../pages/OrderViewPage.tsx';

const Routing = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/orders/place" element={<OrderPlacePage />} />
      <Route path="/orders/view" element={<OrderViewPage />} />
    </Routes>
  </Router>
);

export default Routing;
