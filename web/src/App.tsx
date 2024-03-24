import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./styles/main.css"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import PortfolioPage from "./pages/PortfolioPage"
import ApplicationPage from "./pages/ApplicationPage"
import ExpensesPage from "./pages/ExpensesPage"
import Menu from "./components/Menu"

const Layout = () => {
  return (
    <div className="flex flex-row">
      <div className="h-screen">
        <Menu />
      </div>
      <div className="w-full h-screen bg-red-500 border">
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/portfolio/:codigo",
        element: <ApplicationPage />,
      },
      {
        path: "/despesas",
        element: <ExpensesPage />,
      },
    ],
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
