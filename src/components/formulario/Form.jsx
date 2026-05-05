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

    if (password.length < 8) {
      alert('la contraseña debe ser de al menos 8 digitos')
    } else {
      alert('logueado correctamente!')
    }

   const url = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer token_jwt`,
      },
      body: JSON.stringify({email, password})
    });
    const data = await url.json()
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