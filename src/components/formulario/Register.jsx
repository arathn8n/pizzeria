import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './form.css'
import MyContext from '../MyContextTotal'

const Register = () => {
  const { setToken } = useContext(MyContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const validarInput = async (e) => {
    e.preventDefault()

    // Validar campos vacíos
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Todos los campos son obligatorios')
      return
    }

    // Validar largo de contraseña
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres')
      return
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem("token", data.token)
        setToken(true)
        alert('¡Registro exitoso!')
        navigate('/profile')
      } else {
        alert(data.error || 'Error al registrar el usuario')
      }
      console.log(data)
    } catch (error) {
      console.error(error)
      alert('Error de red al intentar registrarse')
    }
  }

  return (
    <div className='contentForm'>
      <form onSubmit={validarInput}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Confirmar Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}

export default Register