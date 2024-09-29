import Home from "./components/Home"
import PreviewModal from "./components/PreviewModal"
import { useContext } from "react"

function App() {
  return (
    <>
      <Home />
      <PreviewModal visible />
    </>
  )
}

export default App
