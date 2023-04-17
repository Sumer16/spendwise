import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

// layout
import Main, { mainLoader } from './layouts/Main';

// actions
import { logoutAction } from './actions/logout';

// routes
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />, //For each route we can set a custom error page
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        action: logoutAction,
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
