import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"



function App() {


  const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/about", element: <About /> },
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
