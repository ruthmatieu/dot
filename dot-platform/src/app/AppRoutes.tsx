import { Routes, Route } from 'react-router-dom';
import LandingPage from '../features/landing/LandingPage';
import LoginPage from '../features/auth/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<>Dashboard</>} />
    </Routes>
  );
};

export default AppRoutes;
