import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./styles/main.css"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import PortfolioPage from "./pages/PortfolioPage"
import ApplicationPage from "./pages/ApplicationPage"
import ExpensesPage from "./pages/ExpensesPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />
  },
  {
    path: "/portfolio/:codigo",
    element: <ApplicationPage />
  },
  {
    path: "/despesas",
    element: <ExpensesPage />
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
