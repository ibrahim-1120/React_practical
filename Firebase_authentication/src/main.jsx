import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Login from './components/Login.jsx'
import Registration from './component/Registration.jsx'
import Profile from './component/Profile.jsx'


const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "reg", element: <Registration></Registration> },
  { path: "profile", element: <Profile></Profile> }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
