import React from 'react'
import './profile.css'

const Profile = () => {
  return (
    <div className='contentCard'>
      <div className="card">
        <img src="../../../public/perfil.webp" alt="" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <button type="button" className="btn btn-danger">Cerrar sesión</button>
        </div>
      </div>
    </div>

  )
}

export default Profile