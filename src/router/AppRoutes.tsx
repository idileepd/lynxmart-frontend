import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';

import { HomePage } from '@/features/home';
import { OrdersPage, UserDashboard } from '@/features/user';
import { LoginPage } from '@/features/auth';
import { UserRole } from '@/constants';
import { useAuth } from '@/features/firebase';

export const AppRouter = () => {
  const user = useAuth();

  console.log('user', user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<ProtectedRoute allowOnly={[UserRole.USER]} />}>
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>

        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};
