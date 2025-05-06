import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Intro from "./pages/Intro"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Intro />} />
      </Routes>
    </Router>
  )
}

export default App
