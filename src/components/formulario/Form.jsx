import React, { useState } from 'react'
import './form.css'
const Form = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  const validarInput = async (e) => {
    e.preventDefault()

    if (password.length < 6) {
      alert('la contraseña debe ser de al menos 8 digitos')
    } else {
      alert('logueado correctamente!')
    }

    // Envía una petición HTTP al backend en la ruta http://localhost:5000/api/auth/login
   const url = await fetch("http://localhost:5000/api/auth/login", {
    // Usa el método POST porque estás enviando datos (email y password)
      method: "POST",
    // indicas que el contenido es JSON y además mandas un Authorization con un token 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer token_jwt`,
      },
      // conviertes el objeto { email, password } a JSON con JSON.stringify
      body: JSON.stringify({email, password})
    });
    // obtienes los datos en json
    const data = await url.json()
    // guardo el token en el almacenamiento local del navegador y persistira aun que se recargue la pagina
    localStorage.setItem("token", data.token)
    console.log(data)
  }

  return (
    <div className='contentForm'>
      <form onSubmit={validarInput}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail} value={email} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePassword} value={password} />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Form