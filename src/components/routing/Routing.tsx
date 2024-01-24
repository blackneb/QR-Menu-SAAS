// Routing.tsx

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Login from '../auth/Login';
import CreateAccount from '../auth/Signup';
import Landing from '../landing/Landing';


const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  // Check if the user is authenticated (replace with your authentication logic)
  const isAuthenticated = true;

  return isAuthenticated ? <>{element}</> : <Navigate to="/auth" />;
};

const Routing: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
  );
};

export default Routing;
