import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Women from './pages/Women.jsx';
import ErrorPG from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Tambahkan elemen Home sebagai halaman utama
    errorElement: <ErrorPG />,
  },
  {
    path: "/Women",
    element: <Women />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
