import './App.css';
import LandingPage from './LandingPage.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderViewPage from './OrderViewPage.tsx';
import OrderPlacePage from './OrderPlacePage.tsx';

function App() {
  return (
    <Router>
      <div className={'container'}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/orders/place" element={<OrderPlacePage />} />
          <Route path="/orders/view" element={<OrderViewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
