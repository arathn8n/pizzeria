import Navbar from "./components/navbar/Navbar"
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Form from "./components/formulario/Form"
import Register from "./components/formulario/register"
import NotFound from './components/notFound/NotFound'
import Profile from './components/profile/Profile'
import { Route, Routes } from "react-router-dom"
import MyContext from "./components/MyContextTotal"
import { useState } from "react"

function App() {
  // se crean aqui los estados
  const [total, setTotal] = useState(0);
  

  return (
    <>
    {/* se usa el modulo MyContext para pasarle los valores y como son muchos se usan como objetos */}
      <MyContext.Provider value={{total, setTotal}}>
        <Navbar total={total}/>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/login"
            element={<Form />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </MyContext.Provider>


      <Footer />
    </>
  )
}

export default App
