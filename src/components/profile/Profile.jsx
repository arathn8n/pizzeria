import React, { useEffect, useState, useContext } from 'react'
import './profile.css'
import MyContext from '../MyContextTotal'

const Profile = () => {
  const { setToken, setTotal } = useContext(MyContext)
  const [user, setUser] = useState(null)


  async function getProfile() {
    const token = localStorage.getItem('token')
    const url = 'http://localhost:5000/api/auth/me'
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      if (res.ok) {
        const profile = await res.json()
        setUser(profile)
        console.log(profile)
      } else {
        console.error("Error al obtener el perfil:", res.statusText)
      }
    } catch (error) {
      console.error("Error de red al obtener el perfil:", error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken(false)
    setTotal(0)
  }

  return (
    <div className='contentCard'>
      <div className="card">
        <img src="/perfil.webp" alt="Profile" />
        <div className="card-body">
          <h5 className="card-title">{user?.email}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <button type="button" className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
    </div>

  )
}

export default Profile