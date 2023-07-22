import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/router/router.jsx'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import AuthProvider from './components/AuthenticationPage/AuthProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-6xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </QueryClientProvider>

    </div>
  </React.StrictMode>,
)
