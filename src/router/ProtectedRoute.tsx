import { Navigate, Outlet } from 'react-router-dom';

import { useDBUser } from '@/features/firebase/UserProvider';

interface IProtectedRoute {
  allowOnly: string[];
}

export const ProtectedRoute = ({ allowOnly }: IProtectedRoute) => {
  const user = useDBUser();

  if (allowOnly.includes(user?.role ?? '')) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};
