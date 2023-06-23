import MainPage from "./components/MainPage"
import MenuBar from "./components/MenuBar"
import "./styles/main.css"

const App = () => {
  return (
    <>
      <div className="p-5">
        <MenuBar />
        <MainPage />
      </div>
    </>
  )
}

export default App
