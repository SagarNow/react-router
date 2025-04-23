  **we dont use anchor tag in react router because it will reload the page** 

1. npm install react-router-dom
2.  in app.jsx = import { createBrowserRouter, RouterProvider } from 'react-router-dom'
3.  then you have to create router

 ``` 
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    }, 

    {
      path: "/About",
      element: <About/>,
      },
  ])
  ```
  4. then you have to return routerProvider in app.jsx
  ```
  return <RouterProvider router={router} />;
  ```
  5. then you have to create component
  6. then you have to import Link from react-router-dom in top of the component
  ```
  import { Link } from 'react-router-dom'
  ```
  7. then you have to use Link in the component
  ```
  <Link to="/About">About</Link>
```

  
