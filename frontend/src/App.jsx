import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import { lazy } from "react"
import ContactPage from "./pages/Contact"
const Projects = lazy(() => import("./pages/Projects"))

const Experience = lazy(() => import("./pages/Experience"))
const Contact = lazy(() => import("./pages/Contact"))
const AboutSection = lazy(() => import("./pages/About"))




function App() {


  const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/about", element: <AboutSection /> },
    { path: "/experience", element: <Experience /> },
    { path: "/contact", element: <ContactPage /> },

  ])

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
