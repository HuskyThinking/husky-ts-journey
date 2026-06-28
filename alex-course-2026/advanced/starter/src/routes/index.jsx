import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../features/home/Home';
import Forecast from '../features/forecast/Forecast';
import Loading from '../ui/Loading';
import { getCurrentLocation } from '../utils/locationhelper';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: App,
    loader: getCurrentLocation,
    HydrateFallback: Loading,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'forecast',
        Component: Forecast,
      },
    ],
  },
]);

export default router;
