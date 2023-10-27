import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from 'App';
import Profile from 'pages/profile'
import Comedians from 'pages/comedians'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/comedians',
        element: <Comedians />
      }
    ]
  },
]);

export default router