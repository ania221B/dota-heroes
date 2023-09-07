import { useState } from 'react'
import './App.scss'
import HeroList from './HeroList'
import { useEffect } from 'react'
import ReloadButton from './ReloadButton'

const openDotaApiBase = 'https://api.opendota.com/api'

function App () {
  const [heroes, setHeroes] = useState([])
  const [allHeroes, setAllHeroes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  async function getHeroes () {
    setIsLoading(true)
    try {
      const response = await fetch(`${openDotaApiBase}/constants/heroes`)
      const dotaHeroes = await response.json()
      const heroList = Object.values(dotaHeroes)
      setHeroes(heroList)
      setAllHeroes(heroList)
    } catch (error) {
      setIsError(true)
      console.error(error)
    }
    setIsLoading(false)
  }

  function filterHeroes (name, filter) {
    let newHeroes
    if (name === 'Primary Attribute') {
      newHeroes =
        filter === 'all'
          ? allHeroes
          : heroes.filter(hero => hero.primary_attr === filter)
    }
    if (name === 'Attack Type') {
      newHeroes = heroes.filter(hero => hero.attack_type === filter)
    }
    if (name === 'Roles') {
      newHeroes = heroes.filter(hero => hero.roles.includes(filter))
    }

    setHeroes(newHeroes)
  }

  useEffect(() => {
    getHeroes()
  }, [])

  if (isLoading) {
    return (
      <main>
        <section className='section'>
          <div className='container'>
            <h2 className='small-caps text-center'>Loading...</h2>
          </div>
        </section>
      </main>
    )
  }

  if (isError) {
    return (
      <main>
        <section className='section'>
          <div className='container'>
            <h2 className='small-caps text-center'>There was an error</h2>
          </div>
        </section>
      </main>
    )
  }

  if (heroes.length === 0) {
    return (
      <section className='section'>
        <div className='container'>
          <h2 className='small-caps text-center'>
            There are no heroes that meet the chosen criteria.
          </h2>
          <ReloadButton getHeroes={getHeroes}></ReloadButton>
        </div>
      </section>
    )
  }

  return (
    <main>
      <HeroList
        allHeroes={allHeroes}
        heroes={heroes}
        filterHeroes={filterHeroes}
        getHeroes={getHeroes}
      ></HeroList>
    </main>
  )
}

export default App
