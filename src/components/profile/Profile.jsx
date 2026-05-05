import React, { useEffect, useState } from 'react'
import './profile.css'

const Profile = () => {

  const [user, setUser] = useState(null)


  async function getProfile() {
    const token = localStorage.getItem('token')
    const url = 'http://localhost:5000/api/auth/me'
    const res = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    const profile = await res.json()
    setUser(profile)
    console.log(profile)
  }

  useEffect(()=>{
    getProfile()
  }, [])

  return (
    <div className='contentCard'>
      <div className="card">
        <img src="../../../public/perfil.webp" alt="" />
        <div className="card-body">
          <h5 className="card-title">{user.email}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <button type="button" className="btn btn-danger">Cerrar sesión</button>
        </div>
      </div>
    </div>

  )
}

export default Profile