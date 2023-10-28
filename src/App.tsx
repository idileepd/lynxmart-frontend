import { Provider } from 'react-redux';

import { AuthProvider, UserProvider } from '@/features/firebase';
import { store } from '@/store';
import { AppRouter } from '@/router';

export function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </UserProvider>
    </AuthProvider>
  );
}
