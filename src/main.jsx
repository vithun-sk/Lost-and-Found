import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
const router = createBrowserRouter([
  // ... your route definitions
], {
  // 🚨 CRITICAL FIX: Add basename to match your repo name
  basename: "/Lost-and-Found",
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
