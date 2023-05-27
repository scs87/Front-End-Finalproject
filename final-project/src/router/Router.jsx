import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"



export const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}