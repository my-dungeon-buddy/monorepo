import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const Routes = () => useRoutes([
  { path: '/', Component: Home },
]);
