// Routing.tsx

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';


import Landing from '../landing/Landing';
import QRCodeDisplay from '../pages/QRCodeManagement';
import MenuManagement from '../pages/MenuManagement';
import ProfileManagement from '../pages/ProfileManagement';


const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  // Check if the user is authenticated (replace with your authentication logic)
  const isAuthenticated = true;

  return isAuthenticated ? <>{element}</> : <Navigate to="/auth" />;
};

const InsideRouting: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/qrdisplay" element={< QRCodeDisplay data="Your QR Code Data Here" />} />
        <Route path="/menumanagement" element={<MenuManagement />} />
        <Route path="/profilemanagement" element={<ProfileManagement />} />
      </Routes>
  );
};

export default InsideRouting