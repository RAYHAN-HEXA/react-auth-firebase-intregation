
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { router } from './Pages/Routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthContext/AuthProvider/AuthProvider.jsx'
import { StrictMode } from 'react'




createRoot(document.getElementById('root')).render(



  <StrictMode>

  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>

  </StrictMode>,
)
