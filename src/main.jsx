import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutIndex from './components/About/AboutIndex.jsx'
import CompanyIndex from './components/Company/CompanyIndex.jsx'

import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />

  },
  {
    path: "/about",
    element: <AboutIndex />
  },
  {
    path: "/company",
    element: <CompanyIndex />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
