// react-router-dom imports
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

// library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </div>
  )
}

export default App;
