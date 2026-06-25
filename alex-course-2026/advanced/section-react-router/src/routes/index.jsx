import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../components/Home';
import About from '../components/About';

const router = createBrowserRouter([

  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },
]);

export default router;
