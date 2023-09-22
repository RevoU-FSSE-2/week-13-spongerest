import AppProvider from './Provider/AppProvider'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Home, Login, Product, ProductDetail, ProductNew, ProductEdit, SignUp } from './pages'
import { PublicLayout } from './layouts'

function App() {

  const router = createBrowserRouter ([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/product',
          element: <Product />
        },
        {
          path: '/product/:id',
          element: <ProductDetail />
        },
        {
          path: '/product/new',
          element: <ProductNew />
        },
        {
          path: '/product/edit/:id',
          element: <ProductEdit />
        },
      ]
    },
    {
      path: '/',
      element: <Navigate to = "/login" />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
])

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
