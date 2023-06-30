import HomePage from "./pages/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./styles/main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
