import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import TerminalLoader from "./ui/Loaderui";

// Lazy pages
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const AboutSection = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Suspense fallback={<TerminalLoader />}>
        <Home />
      </Suspense>
    },
    {
      path: "/projects",
      element: (
        <Suspense fallback={<TerminalLoader />}>
          <Projects />
        </Suspense>
      ),
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<TerminalLoader />}>
          <AboutSection />
        </Suspense>
      ),
    },
    {
      path: "/experience",
      element: (
        <Suspense fallback={<TerminalLoader />}>
          <Experience />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback={<TerminalLoader />}>
          <ContactPage />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
