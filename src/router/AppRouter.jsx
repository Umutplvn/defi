import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRouter from "./PrivateRouter"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"


const AppRouter = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/check" element={<PrivateRouter />}> */}
            <Route index element={<Home />} />
        {/* </Route> */}
      </Routes>
  )
}

export default AppRouter
