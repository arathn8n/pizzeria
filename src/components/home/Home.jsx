import './home.css'
import Card from '../card/Card'
import React, {useEffect, useState} from 'react'

// import {pizzas} from '../data/pizzas'

const Home = () => {
  
  // const [datos, setDatos] = useState(pizzas)
  // la api nos devuelve un objeto entonces iniciamos con objeto vacio para luego insertar los datos de la api
  const [apiPizzas, setApiPizzas] = useState({})

  // para consimir la api
  useEffect(()=>{
    pizzasApi()

  }, [])

  async function pizzasApi() {
    const url = 'http://localhost:5000/api/pizzas/p001'
    const response = await fetch(url)
    const data = await response.json()

    setApiPizzas(data)
  }

  return (
    <>
    <div className='bgImage'>
      <header className='header'>
        <div className='headerContent'>
          <h1>¡Pizzeria Mamma Mia!</h1>
          <p>Tenemos las mejores pizzas que podrás encontrar</p>
        </div>
      </header>
    </div>

    <section className='container'>
      <div className='row'>

          {/* los datos de la api se pasan como props */}
            <Card key={apiPizzas.id}
              img={apiPizzas.img}
              name={apiPizzas.name}
              price={apiPizzas.price}
              ingredientes={apiPizzas.ingredients}
              descripcion={apiPizzas.desc} 
            />
          

         
          
      </div>
    </section>
    </>
  )
}

export default Home