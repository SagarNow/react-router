import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    }, 

    {
      path: "/About",
      element: <About/>,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      }
  ])

  return (
    <div>




      <RouterProvider router={router} />
    </div>
  )
}

export default App


