import React, { useState } from 'react'
import './form.css'
const Form = () => {

   const [password, setPassword] = useState("")

  const validarInput = (e)=>{
    e.preventDefault()

    if(password.length < 8){
      alert('la contraseña debe ser de al menos 8 digitos')
    }else{
      alert('logueado correctamente!')
    }
  }

  return (
    <div className='contentForm'>
    <form onSubmit={validarInput}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>
  )
}

export default Form