import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import App from './App';

function Router() {
  return useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        { element: <Home />, index: true },
        { path: 'coins/:id', element: <Details /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);
}

export default Router;
