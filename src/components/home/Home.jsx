import './home.css'
import Card from '../card/Card'
import React, {useState} from 'react'
import {pizzas} from '../data/pizzas'

const Home = () => {
  
  const [datos, setDatos] = useState(pizzas)

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
        
        {/* <Card name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://tse2.mm.bing.net/th/id/OIP.YxBwJv6mziFtNgIbye3EhwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" />
        
        
        
        <Card name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://tse4.mm.bing.net/th/id/OIP.Z3-PsMls1jZnfb6n8-FFmgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" />
        

        
          <Card name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="https://th.bing.com/th/id/OIP.K4rzg3rTYg4Hk6ZBX_Fs9gHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"/> */}
        

        
        
          {datos.map(data => 
            <Card key={data.id}
              img={data.img}
              name={data.name}
              price={data.precio}
              ingredients={data.ingredients}
              descripcion={data.desc} 
            />
          )}

          
      </div>
    </section>
    </>
  )
}

export default Home