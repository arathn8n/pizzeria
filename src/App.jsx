import Navbar from "./components/navbar/Navbar"
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Form from "./components/formulario/Form"
import Register from "./components/formulario/register"
import { Route, Routes } from "react-router-dom"

function App() {
  
  
  

  return (
    <>

     <Navbar/>

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
      </Routes>
      
      
    
     
     <Footer/>
    </>
  )
}

export default App
