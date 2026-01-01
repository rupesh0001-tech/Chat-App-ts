import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Resgister from "./Pages/Resgister"
import Login from "./Pages/Login"




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Resgister />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App