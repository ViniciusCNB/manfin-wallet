import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./styles/main.css"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import PortfolioPage from "./pages/PortfolioPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
