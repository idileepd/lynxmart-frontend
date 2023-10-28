import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';

import { HomePage } from '@/features/home';
import { OrdersPage, UserDashboard } from '@/features/user';
import { LoginPage } from '@/features/auth';
import { UserRole } from '@/constants';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<ProtectedRoute allowOnly={[UserRole.USER]} />}>
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
