import React, { useState } from 'react'

import searchIcon from '../assets/images/search.svg'
import mapPinIcon from '../assets/images/map-pin.svg'
import career from '../assets/images/career.svg'

function Home() {
  const [title, setTitle] = useState('')
  const [locality, setLocality] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    console.log({
      title,
      locality
    })
  }

  return (
    <>
      <header className="header-container">
        <div>
          <h1>AlphaJob</h1>

          <button className="sign-in-button">Login</button>
        </div>
      </header>

      <main className="main-container">
        <div className="content-container">
          <h1>
            Seja contratado pelos melhores times de tecnologia.
          </h1>

          <p>
            Encontre emprego de acordo com seu interesse, só clicar em pesquisar <br />
            e escolher a categoria de acordo com suas habilidades.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-block">
              <img src={searchIcon} alt="Pesquisar" />
              <input 
                placeholder="Título ou palavra-chave" 
                onChange={event => setTitle(event.target.value)} 
              />
            </div>
            <div className="input-block">
              <img src={mapPinIcon} alt="Localidade" />
              <input 
                placeholder="Localidade" 
                onChange={event => setLocality(event.target.value)}  
              />
            </div>

            <button type="submit">Procurar</button>
          </form>
        </div>

        <div className="container-background">
          <img src={career} alt="Background" />
        </div>
      </main>
    </>
  )
}

export default Home