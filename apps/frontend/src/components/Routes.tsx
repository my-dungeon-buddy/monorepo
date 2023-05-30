import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Tracker } from '../pages/Tracker';

export const Routes = () => useRoutes([
  { path: '/', Component: Home },
  { path: '/tracker', Component: Tracker },
]);
