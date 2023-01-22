import { Routes, Route, useLocation } from 'react-router-dom';

import { TodoApp } from './components/TodoApp/TodoApp';
import { AuthProvider } from './components/Auth/AuthContext';
import { DefaultProvider } from './components/DefaultContext';
import { ErrorProvider } from './components/ErrorNotification/ErrorContext';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

export const App = () => {
  const location = useLocation().pathname;
  const checkStatus = location === '/active' || location === '/completed';

  return (
    <AuthProvider>
      <ErrorProvider>
        <DefaultProvider>
          <Routes>
            <Route path="/" element={<TodoApp />} />
            {checkStatus && <Route path=":status" element={<TodoApp />} />}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </DefaultProvider>
      </ErrorProvider>
    </AuthProvider>
  );
};
