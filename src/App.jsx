import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  LogIn,
  Home,
  AddShoe,
  Shoe,
  EditShoe,
  Delete,
  NotFound
} from './pages';

import { ProtectedRoute, SharedLayout } from './components';

const routes = [
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'add',
        element: <ProtectedRoute><AddShoe /> </ProtectedRoute>,
      },
      {
        path: 'logIn',
        element: <LogIn />,
      },
      {
        path: 'products',
        children: [
          {
            path: ':shoeId',
            element: <Shoe />
          },
          {
            path: ':shoeId/edit',
            element: <ProtectedRoute> <EditShoe /></ProtectedRoute>
          }
        ]
      },
      {
        path: 'delete',
        element: <ProtectedRoute> <Delete /></ProtectedRoute>,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
];

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App