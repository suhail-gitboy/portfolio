import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import AboutSection from "./pages/About"



function App() {


  const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/about", element: <AboutSection /> },
    { path: "/experience", element: <Experience /> },
    { path: "/community", element: <Contact /> },

  ])

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
