import React, { useContext, useState } from 'react'
import './card.css'
import MyContext from '../MyContextTotal'

const Card = (props) => {
  const [contador, setContador] = useState(0)
  // usamos el context en card y desestructuramos total y set total
  const {total, setTotal} = useContext(MyContext)

  function handleClickIncrement() {
    setContador(contador + 1)
    setTotal(total + props.price)
  }

  function handleClickDecrement() {
    if (contador > 0) {
      setContador(contador - 1)
      setTotal(total - props.price)
    }
  }


  return (
    <>
      <div className="card col-12 col-md-4" >
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">Pizza {props.name}</h5>
          <ul>
            🍕 Ingredientes:
            {props.ingredientes?.map((ingrediente, id) => (
              <li key={id}>{ingrediente}</li>
            ))}
          </ul>


          <p>precio: {props.price}</p>
          <button type="button" className="btn btn-light">Ver más</button>
          <div className='d-flex'>
            <button type="button" className="btn btn-primary" onClick={handleClickIncrement}>Añadir</button>
            <p className='mx-2'>{contador}</p>
            <button type="button" className="btn btn-danger" onClick={handleClickDecrement}>quitar</button>
          </div>
        </div>

      </div>

    </>

  )
}

export default Card