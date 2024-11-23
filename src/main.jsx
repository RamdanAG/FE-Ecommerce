import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';

import WomenPage from './pages/Women';
// import MenPage from './pages/Men';
// import KidsPage from './pages/Kids';
// import BabyPage from './pages/Baby';

import ErrorPG from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPG />,
  },
  // {
  //   path: "/Women",
  //   element: <WomenPage />,
  // },
  // {
  //   path: "/Men",
  //   element: <MenPage />,
  // },
  // {
  //   path: "/Kids",
  //   element: <KidsPage/>,
  // },
  // {
  //   path: "/Baby",
  //   element: <BabyPage />,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
