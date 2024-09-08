import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Brewing from './Pages/Brewing.jsx'
import Weather from './Pages/Weather.jsx'
import Dogfeeder from './Pages/Dogfeeder.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/brewing',  // New path
    element: <Brewing></Brewing>,  // New component for this path
  },
  {
    path: '/weather',  // New path
    element: <Weather></Weather>,  // New component for this path
  },
  {
    path: '/dogfeeder',  // New path
    element: <Dogfeeder></Dogfeeder>,  // New component for this path
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


    //<App />