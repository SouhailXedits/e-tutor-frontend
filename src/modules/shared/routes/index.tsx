import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthRoutes } from 'modules/auth/routes';
import { useHomeRoutes } from 'modules/home/routes';
import NotFound from '../pages/NotFound';

const authRoutes = useAuthRoutes();
const homeRoutes = useHomeRoutes();

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      {authRoutes}
      {homeRoutes}

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
