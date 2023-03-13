import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

function Router() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:id', element: <Details /> },
    { path: '*', element: <div>Page Not Found</div> },
  ]);
}

export default Router;
