import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./styles/main.css"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import PortfolioPage from "./pages/PortfolioPage"
import ApplicationPage from "./pages/ApplicationPage"
import ExpensesPage from "./pages/ExpensesPage"
import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
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
