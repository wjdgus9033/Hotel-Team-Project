import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PropertyPage from '../pages/PropertyPage';
import BookingPage from '../pages/BookingPage';
import LoginPage from '../pages/LoginPage';
import AdminPage from '../pages/AdminPage';
import SignupPage from '../pages/SignupPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/signup" element={<SignupPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}
